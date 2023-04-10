/**
 * @file FilterSelect.jsx
 * @description Componente con el que se puede filtrar las opciones de un select
 * @componentNumber CMP011_5
 */
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { ChevronDown, Search } from '@/components/icons/Icons'
import { useSelector } from 'react-redux'
import Flag from '@/components/common/Flag'
const FilterSelect = ({
	country = 'CR',
	status = 'none',
	regex = null,
	value = { value: '' },
	setValue = null,
	block = false,
	mandatory = false,
	helperText = '',
}) => {
	const dropdownRef = useRef(null)
	const [selectedCountry, setSelectedCountry] = useState({
		codeArea: '+506',
		countryCode: 'CR',
		name: 'Costa Rica',
		src: 'https://flagcdn.com/w320/cr.png',
	})
	const [showList, setShowList] = useState(false)
	const [filterCountries, setFilterCountries] = useState([])
	const [countryCodes, setCountryCodes] = useState([])
	const { flagData } = useSelector((state) => state.storage)
	const formatPhoneNumber = (phone) => {
		const phoneLength = phone.length

		if (phoneLength <= 4) {
			return phone
		} else if (phoneLength <= 8) {
			return `${phone.substring(0, 4)} ${phone.substring(4)}`
		}
		return phone
	}

	const handleChange = (e) => {
		const valueInput = e.target.value
		setValue({ ...value, value: valueInput, status: 'none'})//
	}

	const handleBlur = (e) => {
		const valuePhone = e.target.value
		setValue({
			...value,
			value: valuePhone,
			status: 'none',
		})
		validateRegex(valuePhone)
	}
	const handleShowList = () => {
		if (block) return
		setShowList(!showList)
	}
	const handleSelectCountry = (country) => {
		setValue({ ...value, code: country.codeArea, })
		setSelectedCountry(country)
		setShowList(false)
	}

	const filterCountriesOnChange = (e) => {
		const { value } = e.target
		const filteredCountries = countryCodes.filter((country) => {
			return country.name.toLowerCase().includes(value.toLowerCase())
		})
		setFilterCountries(filteredCountries)
	}
	const validateRegex = (valuePhone) => {
		if (regex) {
			if (regex.test(valuePhone.trim())) {
				setValue({
					...value,
					value: formatPhoneNumber(valuePhone),
					status: 'success',
				})
			} else {
				setValue({
					...value,
					value: formatPhoneNumber(valuePhone),
					status: 'fail',
				})
			}
		}
	}
	const removeSpaces = (e) => {
		const { value } = e.target
		const newValue = value.replace(/\s/g, '')
		setValue({ ...value, value: newValue, status: 'none' })
	}
	useEffect(() => {
		setCountryCodes(flagData)
	}, [flagData])

	useEffect(() => {
		const countrySelected = countryCodes.find(
			(countryEl) => countryEl.countryCode == country
		)
		setSelectedCountry(countrySelected)
		setFilterCountries(countryCodes)
		setValue({ ...value, code: '+506' }) 
	}, [countryCodes])
	useEffect(() => {
		// Manejador de eventos de clic global
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowList(false)
			}
		}

		// Agregar manejador de eventos al documento global
		document.addEventListener('mousedown', handleClickOutside)

		// Eliminar manejador de eventos al desmontar el componente
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [showList])
	return (
		<>
			{selectedCountry && (
				<SelectFilter
					block={block}
					showList={showList}
					ref={dropdownRef}
					status={status}
					mandatory={mandatory}
				>
					{selectedCountry && (
						<div>
							<span>Número de celular</span>
							<div>
								<span onClick={() => handleShowList()}>
									<Flag
										height={27 * 0.7}
										width={40 * 0.7}
										src={selectedCountry.src}
									/>
									{!block && <ChevronDown />}
								</span>
								<span>{selectedCountry.codeArea}</span>
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={value.value}
									onFocus={removeSpaces}
								/>
							</div>
						</div>
					)}
					<div>
						<div>
							<Search />
							<input
								type="text"
								placeholder="Buscar un pais"
								onChange={(e) => filterCountriesOnChange(e)}
							/>
						</div>
						<ul>
							{filterCountries.map((country, index) => (
								<li
									key={index}
									onClick={() =>
										handleSelectCountry({
											countryCode: country.countryCode,
											name: country.name,
											codeArea: country.codeArea,
											src: country.src,
										})
									}
								>
									<span>
										<Flag
											code={country.countryCode}
											height={16}
											width={24}
											src={country.src}
										/>
									</span>
									<span>{country.name}</span>
									<span>{country.codeArea}</span>
								</li>
							))}
						</ul>
					</div>
					{status == 'success' ||
            (status == 'fail' && <span>{helperText}</span>)}
				</SelectFilter>
			)}
		</>
	)
}

export default FilterSelect

const SelectFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 287px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  position: relative;
  & > span {
    position: absolute;
    //styleName: Body/Body Small - Montserrat Regular;
    font-family: Montserrat;
    font-size: 13px; //14px original
    font-weight: 400;
    line-height: 15px; //17px original
    letter-spacing: 0px;
    text-align: left;
    top: 85px;
    color: ${(props) =>
		props.status == 'success'
			? 'var(--alert-success)'
			: props.status == 'fail'
				? 'var(--alert-error)'
				: 'var(--neutral-gray-colors-neutral-gray-900)'};
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 14px;
    border-bottom: 1px solid var(--primary-blue-primary-blue-200);
    ${(props) =>
		props.status === 'fail' &&
      css`
        border-bottom: 1px solid var(--alert-error);
      `}
    ${(props) =>
		props.status === 'success' &&
      css`
        border-bottom: 1px solid var(--alert-success);
      `}
    
    & > span {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 290px;
      margin-bottom: 8px;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      color: var(--neutral-gray-colors-neutral-gray-500);
      &::after {
        ${(props) =>
		props.mandatory &&
          css`
            content: "*";
            position: absolute;
            justify-content: center;
            top: 4px;
            right: 7px;
            color: var(--alert-error);
          `}
      }
    }
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      & > span:first-of-type {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding-left: 8px;
        cursor: pointer;
        ${(props) =>
		props.block &&
          css`
            cursor: not-allowed;
            margin-right: 10px;
          `}

        & > i {
          font-size: 20px;
          color: var(--neutral-gray-colors-neutral-gray-500);
        }
      }
    }
    & input {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      outline: none;
      border: none;
      padding: 8px 0;
      background: transparent;
      color: var(--neutral-gray-colors-neutral-gray-500);
      ${(props) =>
		props.status === 'fail' &&
        css`
          color: var(--alert-error);
        `}
    }
  }
  & > div:nth-child(2) {
    border-radius: 10px;
    display: ${(props) => (props.showList ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    top: 82px;
    /* background-color: #eee; */
    padding: 8px 6px;
    background-color: var(--neutral-gray-colors-neutral-white);
    box-shadow: 0px 0px 4px 0px #2d487540;

    z-index: 9;

    width: 100%;
    height: fit-content;
    animation: slide 0.3s ease-in-out;
    @keyframes slide {
      0% {
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid var(--primary-blue-primary-blue-200);
      & > i {
        margin-left: 8px;
      }
      & > input {
        width: 100%;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: left;
        outline: none;
        border: none;
        padding: 8px 0 8px 15px;
        color: var(--primary-blue-primary-blue-900);
      }
    }
    & > ul {
      display: flex;
      flex-direction: column;
      padding: 8px 0 0 0;
      max-height: 300px;
      width: 100%;
      overflow-y: auto;

      & > li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        //styleName: Caption/Caption - Regular;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: left;

        gap: 8px;
        color: var(--neutral-gray-colors-neutral-gray-500);
        cursor: pointer;
        padding: 8px;
        &:hover {
          background-color: var(--neutral-background-neutral-olive-100);
        }
        & > span:nth-child(2) {
          text-align: left;
          width: 100%;
        }
      }
    }
  }
`

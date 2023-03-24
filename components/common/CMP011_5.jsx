import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ChevronDown, Search } from '@/components/icons/Icons'
import { useSelector } from 'react-redux'
import Flag from '@/components/common/Flag'
const CMP011_5 = ({ country = 'CR' }) => {
	const dropdownRef = useRef(null)
	const [selectedCountry, setSelectedCountry] = useState({
		codeArea: '+506',
		countryCode: 'CR',
		name: 'Costa Rica',
		src: 'https://flagcdn.com/w320/cr.png',
	})
	const [phone, setPhone] = useState('71144994')
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
		const { value } = e.target
		setPhone(value)
	}

	const handleBlur = (e) => {
		const { value } = e.target
		setPhone(formatPhoneNumber(value))
	}
	const handleShowList = () => {
		setShowList(!showList)
	}
	const handleSelectCountry = (country) => {
		console.log(country)
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
	useEffect(() => {
		setCountryCodes(flagData)
	}, [flagData])

	useEffect(() => {
		const countrySelected = countryCodes.find(
			(countryEl) => countryEl.countryCode == country
		)
		setSelectedCountry(countrySelected)
		setFilterCountries(countryCodes)
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
				<SelectFilter showList={showList} ref={dropdownRef}>
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
									<ChevronDown />
								</span>
								<span>{selectedCountry.codeArea}</span>
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									maxLength={8}
									value={phone}
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
				</SelectFilter>
			)}
		</>
	)
}

export default CMP011_5

const SelectFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--neutral-gray-colors-neutral-gray-300);
  max-width: 287px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  position: relative;
  & > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 16px;
    cursor: pointer;
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 14px;
    border-bottom: 1px solid var(--primary-blue-primary-blue-200);
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
        & > i {
          font-size: 20px;
          color: var(--neutral-gray-colors-neutral-gray-500);
        }
        & > img {
          box-shadow: 0px 1px 2px 0px #1018280f;
          box-shadow: 0px 1px 3px 0px #1018281a;
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
    }
  }
  & > div:nth-child(2) {
    border-radius: 10px;
    display: ${(props) => (props.showList ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    top: 78px;
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

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { countryCodes } from '@/constants/constants'
import Flag from 'react-world-flags'
import { ChevronDown, Search } from '@/components/icons/Icons'

const CMP011_5 = ({country= 'CR'}) => {
	const [selectedCountry, setSelectedCountry] = useState({})
	const [phone, setPhone] = useState('71144994')
	const [showList, setShowList] = useState(false)
	const [filterCountries, setFilterCountries] = useState([])

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
		const countrySelected = countryCodes.find((countryEl) => countryEl.countryCode === country)
		setSelectedCountry(countrySelected)
		setFilterCountries(countryCodes)
	}, [])
	return (
		<SelectFilter showList={showList}>
			<div>
				<span onClick={()=>handleShowList()}>
					<Flag code={selectedCountry.countryCode} height={27 * 0.7} width={40 * 0.7} /> <ChevronDown />
				</span>
				<span>+{selectedCountry.codeArea}</span>
				<input
					type="text"
					onChange={handleChange}
					onBlur={handleBlur}
					maxLength={8}
					value={phone}
				/>
			</div>
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
						<li key={index}
							onClick={() => handleSelectCountry({ countryCode: country.countryCode, name: country.name, codeArea: country.codeArea })}
						>
							<span>
								<Flag code={country.countryCode} height={16} width={24} />
							</span>
							<span>{country.name}</span>
							<span>+{country.codeArea}</span>
						</li>
					))}
				</ul>
			</div>
		</SelectFilter>
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

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-bottom: 1px solid var(--primary-blue-primary-blue-200);
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
    top: 40px;
    /* background-color: #eee; */
    padding: 8px 6px;
    background-color: var(--neutral-gray-colors-neutral-white);
    box-shadow: 0px 0px 4px 0px #2D487540;

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
      border-bottom: 1px solid var(--primary-blue-primary-blue-200);
      & > input {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        outline: none;
        border: none;
        padding: 8px 0 8px 15px;
        color: var(--neutral-gray-colors-neutral-gray-500);
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
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
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

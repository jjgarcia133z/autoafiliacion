import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Calendario = () => {
	const [locale, setLocale] = useState('es-ES')
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear()) // 2023
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()) // 05
	const [currentDay, setCurrentDay] = useState(new Date().getDate()) // 28
	const [selectedDay, setSelectedDay] = useState(null) // 28
	const [months, setMonths] = useState([]) // [Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre]
	const [daysOfMonths, setDaysOfMonths] = useState(null) // 31

	const intl = new Intl.DateTimeFormat(locale, {
		month: 'long',
	})
	const getFirstDayOfMonthWeekday = (year, month) => {
		const firstDayOfMonth = new Date(year, month, 1)
		const weekday = firstDayOfMonth.getDay()
		return weekday // devuelve un número del 0 al 6 que representa el día de la semana
	}
	const getInfoCalendar = () => {
		const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
		setDaysOfMonths(() => {
			return daysInMonth
		})
	}
	const getMonthNameByIndex = (index) => {
		return intl.format(new Date(currentYear, index, 1))
	}
	const nextMonthHandler = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0)
			setCurrentYear(currentYear + 1)
		} else {
			setCurrentMonth(currentMonth + 1)
		}
		getInfoCalendar()
	}
	const prevMonthHandler = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11)
			setCurrentYear(currentYear - 1)
		} else {
			setCurrentMonth(currentMonth - 1)
		}
		getInfoCalendar()
	}
	const nextYearHandler = () => {
		setCurrentYear(currentYear + 1)
		getInfoCalendar()
	}
	const prevYearHandler = () => {
		setCurrentYear(currentYear - 1)
		getInfoCalendar()
	}
	useEffect(() => {
		getInfoCalendar()
		console.log({
			currentYear,
			currentMonth,
		})
	}, [currentYear, currentMonth])

	return (
		<CalendarContainer>
			<MonthSelector>
				<button onClick={(e) => prevMonthHandler(e)}> {'<'} </button>
				<span>{getMonthNameByIndex(currentMonth)}</span>
				<button onClick={(e) => nextMonthHandler(e)}>{'>'}</button>
			</MonthSelector>
			<YearSelector>
				<button onClick={(e) => prevYearHandler(e)}> {'<'} </button>
				<span>{currentYear}</span>
				<button onClick={(e) => nextYearHandler(e)}>{'>'}</button>
			</YearSelector>
			<DaysHeader>
				<span>D</span>
				<span>L</span>
				<span>K</span>
				<span>M</span>
				<span>J</span>
				<span>V</span>
				<span>S</span>
			</DaysHeader>
			<CalendarDays>
				{daysOfMonths &&
          [...Array(daysOfMonths)].map((_, index) => {
          	return <span key={index}>{index + 1}</span>
          })}
			</CalendarDays>
		</CalendarContainer>
	)
}

export default Calendario

const CalendarContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  padding: 16px 42.5px 16px 42.5px;
  border-radius: 0.5rem;
  background: var(--primary-blue-primary-blue-main-500);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  height: fit-content;
`
const YearSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  & > button {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: var(--secundary-accent-secundary-accent-main-500);
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--neutral-gray-colors-neutral-white);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    user-select: none;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`
const MonthSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  & > button {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: var(--secundary-accent-secundary-accent-main-500);
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--neutral-gray-colors-neutral-white);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
    user-select: none;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`
const DaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5rem;
  padding: 0.5rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    user-select: none;
    cursor: pointer;
  }
`
const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 27.22px;
  padding: 0.5rem;
  width: 289.33px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--neutral-gray-colors-neutral-white);
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    user-select: none;

    cursor: pointer;
    &:hover {
      background: var(--secundary-accent-secundary-accent-main-500);
      color: var(--primary-blue-primary-blue-900);
    }
  }
`

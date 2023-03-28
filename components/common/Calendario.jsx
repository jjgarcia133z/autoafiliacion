import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CMP037 from '../home/CMP037'

const Calendario = () => {
	const [locale, setLocale] = useState('es-ES')
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear()) // 2023
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()) // 05
	const [currentDay, setCurrentDay] = useState(new Date().getDate()) // 28
	const [selectedDay, setSelectedDay] = useState(null) // 28
	const [firstDayOfMonth, setFirstDayOfMonth] = useState(null) // 0 [domingo
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
		const firstDayOfMonth = getFirstDayOfWeek(currentYear, currentMonth)
		setFirstDayOfMonth(() => {
			// 0 : domingo 1: lunes 2: martes 3: miercoles 4: jueves 5: viernes 6: sabado
			return firstDayOfMonth
		})
	}
	const getMonthNameByIndex = (index) => {
		return intl.format(new Date(currentYear, index, 1))
	}
	const getFirstDayOfWeek = (year, month) => {
		const date = new Date(year, month - 1, 1).getDay()
		return date
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
		<div>
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
				<CalendarDays firstDay={firstDayOfMonth}>
					{daysOfMonths &&
          [...Array(daysOfMonths)].map((_, index) => {
          	return <span key={index}>{index + 1}</span>
          })}
				</CalendarDays>
			</CalendarContainer>
			<CMP037
				type="text"
				mandatory={true}
				label="Fecha de nacimiento"
				placeholder="20/05/2021"
			/>
		</div>
	)
}

export default Calendario

const CalendarContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px 42.5px 16px 42.5px;
  border-radius: 10px;
  background: var(--primary-blue-primary-blue-main-500);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  height: fit-content;
`
const YearSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 0.5rem;
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
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 16px 0.5rem;
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
  gap: 27.22px;
  padding: 0.5rem 0.5rem 12px 0.5rem;
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
  gap: 27.22px;
  padding: 0.5rem;
  width: 289.33px;
  & > span:nth-child(1) {
    grid-column: ${(props) => props.firstDay};
  }
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

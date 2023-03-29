/**
 * @fileoverview Calendario
 * @name Calendario.jsx
 * @componentNumber CMP031
 */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CMP037 from '../home/CMP037'
import { ChevronLeft, ChevronRight } from '../icons/Icons'
import { Calendar } from '../icons/Icons'
const Calendario = () => {
	const [locale, setLocale] = useState('es')
	const [yearSelected, setCurrentYear] = useState(new Date().getFullYear()) // 2023
	const [monthSelected, setCurrentMonth] = useState(new Date().getMonth()) // 05
	const [currentDay, setCurrentDay] = useState(new Date().getDate()) // 28
	const [selectedDay, setSelectedDay] = useState(new Date().getDate()) // 28
	const [concatenatedDate, setConcatenatedDate] = useState('') // 20/12/2023
	const [firstDayOfMonth, setFirstDayOfMonth] = useState(null) // 0 [domingo
	const [daysOfMonths, setDaysOfMonths] = useState(null) // 31
	const [showCalendar, setShowCalendar] = useState(false)
	const [validation, setValidation] = useState('none')

	const intl = new Intl.DateTimeFormat(locale, {
		month: 'long',
	})
	const selectedDayHandler = (day) => {
		const daySelected = String(day).padStart(2, '0')
		const month = String(monthSelected).padStart(2, '0')
		setSelectedDay(daySelected)
		setShowCalendar(false)
		setConcatenatedDate(() => {
			return `${daySelected}/${month}/${yearSelected}`
		})
	}
	const getFirstDayOfMonthWeekday = (year, month) => {
		const firstDayOfMonth = new Date(year, month, 1).getDay()
		return firstDayOfMonth // devuelve un número del 0 al 6 que representa el día de la semana
	}
	const getInfoCalendar = () => {
		const daysInMonth = new Date(yearSelected, monthSelected + 1, 0).getDate()
		setDaysOfMonths(() => {
			return daysInMonth
		})
		const firstDayOfMonth = getFirstDayOfMonthWeekday(
			yearSelected,
			monthSelected
		)
		setFirstDayOfMonth(() => {
			// 0 : domingo 1: lunes 2: martes 3: miercoles 4: jueves 5: viernes 6: sabado
			return firstDayOfMonth + 1
		})
	}
	const getMonthNameByIndex = (index) => {
		return intl.format(new Date(yearSelected, index, 1))
	}
	const nextMonthHandler = () => {
		if (monthSelected === 11) {
			setCurrentMonth(0)
			setCurrentYear(yearSelected + 1)
		} else {
			setCurrentMonth(monthSelected + 1)
		}
		getInfoCalendar()
	}
	const prevMonthHandler = () => {
		if (monthSelected === 0) {
			setCurrentMonth(11)
			setCurrentYear(yearSelected - 1)
		} else {
			setCurrentMonth(monthSelected - 1)
		}
		getInfoCalendar()
	}
	const nextYearHandler = () => {
		setCurrentYear(yearSelected + 1)
		getInfoCalendar()
	}
	const prevYearHandler = () => {
		setCurrentYear(yearSelected - 1)
		getInfoCalendar()
	}
	const iconAction = () => {
		setShowCalendar(!showCalendar)
	}
	const validationDate = (date) => {
		//validar que la fecha sea correcta con este formato DD/MM/AAAA por ejemplo 20/12/2023
		const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
		if (regex.test(date)) {
			setValidation('success')
			return
		} else {
			setValidation('fail')
			return
		}
	}

	useEffect(() => {
		getInfoCalendar()
	}, [yearSelected, monthSelected, selectedDay])
	useEffect(() => {
		validationDate(concatenatedDate)
	}, [concatenatedDate])

	return (
		<ContainerCalendarAndInput>
			{showCalendar && (
				<CalendarContainer>
					<MonthSelector>
						<button onClick={(e) => prevMonthHandler(e)}>
							{' '}
							<ChevronLeft />{' '}
						</button>
						<span>{getMonthNameByIndex(monthSelected)}</span>
						<button onClick={(e) => nextMonthHandler(e)}>
							{' '}
							<ChevronRight />
						</button>
					</MonthSelector>
					<YearSelector>
						<button onClick={(e) => prevYearHandler(e)}>
							{' '}
							<ChevronLeft />{' '}
						</button>
						<span>{yearSelected}</span>
						<button onClick={(e) => nextYearHandler(e)}>
							{' '}
							<ChevronRight />
						</button>
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
              	return (
              		<span
              			key={index}
              			onClick={() => selectedDayHandler(index + 1)}
              			className={selectedDay === index + 1 ? 'selected' : ''}
              		>
              			{console.log(selectedDay, index + 1)}
              			{index + 1}
              		</span>
              	)
              })}
					</CalendarDays>
				</CalendarContainer>
			)}
			<CMP037
				type="text"
				mandatory={true}
				label="Fecha de nacimiento"
				placeholder="  dd/mm/aaaa"
				state={validation}
				iconAction={iconAction}
				Icon={Calendar}
				value={concatenatedDate}
				setValue={setConcatenatedDate}
				validation={validationDate}
				helperText="Formato incorrecto"
			/>
		</ContainerCalendarAndInput>
	)
}

export default Calendario
const ContainerCalendarAndInput = styled.div`
  position: relative;
`
const CalendarContainer = styled.div`
  margin-top: 1rem;

  display: grid;
  position: absolute;
  top: -230px;
  right: -260px;
  grid-template-columns: 1fr;
  padding: 16px;
  border-radius: 10px;
  background: var(--primary-blue-primary-blue-main-500);
  box-shadow: var(--center-shadow);
  height: fit-content;
  z-index: 999;
`
const YearSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 4px 0.5rem;
  & > button {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Montserrat;
    font-size: 24px;
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
    font-family: Montserrat;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`
const MonthSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 4px 0.5rem;

  & > button {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Roboto;
    font-size: 24px;
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
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
    user-select: none;
  }
  & > span:nth-child(2) {
    font-family: Montserrat;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`
const DaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 22px);
  gap: 8px;

  padding: 0.5rem 0.5rem 4px 0.5rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-green-primary-green-main-500);
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    user-select: none;
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`
const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0.5rem;
  width: fit-content;
  & > span:nth-child(1) {
    grid-column: ${(props) => props.firstDay};
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: var(--neutral-gray-colors-neutral-white);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    user-select: none;
    width: 22px;
    height: 22px;
    cursor: pointer;
    &:hover {
      background: var(--primary-blue-primary-blue-400);
      color: var(--neutral-gray-colors-neutral-white);
    }
    &.selected {
      background: var(--primary-green-primary-green-main-500);
      color: var(--primary-blue-primary-blue-900);
      font-weight: 600;

      &:hover {
        background: var(--primary-green-primary-green-main-500);
        color: var(--neutral-gray-colors-neutral-white);
      }
    }
  }
`

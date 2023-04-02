/**
 * @file CMP022 - PlanesOptions.jsx
 * @description Componente de radio buttons para seleccionar el plan.
 * @componentNumber CMP022
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { GoCheck as Check } from 'react-icons/go'
import { planState } from '@/constants/constants'
import { useEffect } from 'react'
const PlanesOptions = ({ defaultRadio = planState.mensual }) => {
	const [selected, setSelected] = useState(1)
	const handleRadioChange = (event) => {
		setSelected(event.target.value)
	}
	useEffect(() => {
		setSelected(defaultRadio)
	}, [defaultRadio])
	return (
		<PlanesOptionsContainer>
			<div>
				<LabelStyle
					selected={selected === planState.mensual}
					htmlFor="rb_mensual"
				>
					<input
						id="rb_mensual"
						type="radio"
						name="plan"
						value={planState.mensual}
						onClick={(e) => handleRadioChange(e)}
					/>
					<span>{selected === planState.mensual ? <Check /> : null}</span>
					<span>Plan Mensual</span>
				</LabelStyle>
				<LabelStyle
					selected={selected === planState.trimestral}
					htmlFor="rb_trimestral"
				>
					<input
						id="rb_trimestral"
						type="radio"
						name="plan"
						value={planState.trimestral}
						onClick={(e) => handleRadioChange(e)}
					/>
					<span>{selected === planState.trimestral ? <Check /> : null}</span>
					<span>Plan Trimestral</span>
				</LabelStyle>
				<LabelStyle
					selected={selected === planState.semestral}
					htmlFor="rb_semestral"
				>
					<input
						id="rb_semestral"
						type="radio"
						name="plan"
						value={planState.semestral}
						onClick={(e) => handleRadioChange(e)}
					/>
					<span>{selected === planState.semestral ? <Check /> : null}</span>
					<span>Plan Semestral</span>
				</LabelStyle>
				<LabelStyle selected={selected === planState.anual} htmlFor="rb_anual">
					<input
						id="rb_anual"
						type="radio"
						name="plan"
						value={planState.anual}
						onClick={(e) => handleRadioChange(e)}
					/>
					<span>{selected === planState.anual ? <Check /> : null}</span>
					<span>Plan Anual</span>
				</LabelStyle>
			</div>
		</PlanesOptionsContainer>
	)
}

export default PlanesOptions
const LabelStyle = styled.label`
  background-color: ${(props) =>
		props.selected
			? 'var(--secundary-accent-secundary-accent-main-500)'
			: 'var(--white)'};
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--blue-500)')};
  height: 41px;
  width: 170px;
  border-radius: 30px;
  padding: 9px 8px 9px 8px;

  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  //styleName: Body/Body Medium  - Montserrat Medium;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  transition: "background" 0.8s ease-in-out;
  & > span:first-of-type {
    margin-right: 8px;
    border-radius: 50%;
    border: ${(props) => (props.selected ? 'none' : '1px solid black')};
    height: 23px;
    width: 23px;
    background-color: var(--neutral-gray-colors-neutral-white);
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      transform: translateY(1px);
      color: var(--white);
      height: 16px;
      width: 16px;
    }
  }
  & > span:last-of-type {
    font-size: 16px;
    font-weight: 500;
    width: 123px;
  }
  & > input {
    display: none;
  }
`
const PlanesOptionsContainer = styled.div`
  display: flex;
  height: 57px;
  width: 697px;
  border-radius: 30px;
  border: 1px solid #112145;
  padding: 8px;

  & > div:first-of-type {
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

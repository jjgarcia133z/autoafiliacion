/**
 * @file StepperContainer.jsx
 * @description Contenedor de steppers.
 * @componentNumber CMP03
 */
import React from 'react'
import styled from 'styled-components'
import StepButton from './StepButton'
import { state } from '@/constants/constants'
import { useSelector } from 'react-redux'

const CMP03 = () => {
	const steps = useSelector((state) => state.config.steps)
	return (
		<StepperBar>
			{steps.map((step, index) => {
				const isFirst = index === 0
				const isLast = index === steps.length - 1
				return (
					<StepButton
						key={index}
						index={index + 1}
						stepState={step.status}
						title={step.title}
						first={isFirst}
						last={isLast}
					/>
				)
			})}
		</StepperBar>
	)
}

export default CMP03

const StepperBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1194px) {
    display: flex;
  }
`

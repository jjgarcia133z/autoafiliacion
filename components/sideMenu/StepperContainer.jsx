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
import usePage from '@/hooks/usePage'
const CMP03 = () => {
	const { steps, currentIndex } = useSelector((state) => state.config)
	const { updateStepStatus, goTo } = usePage()
	const handleClick = (index, url) => {
		console.log('click2')
		updateStepStatus(index, url , true)
	}
	return (
		<StepperBar>
			{steps.map((step, index) => {
				const isFirst = index === 0
				const isLast = index === steps.length - 1
				return (
					<StepButton
						key={index}
						index={index}
						stepStatus={step.status}
						title={step.title}
						first={isFirst}
						last={isLast}
						url={step.url}
						onCLick={() => handleClick(index, step.url)}
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

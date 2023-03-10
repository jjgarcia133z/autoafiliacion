import React, { useEffect } from 'react'
import styled from 'styled-components'
import { stateCss, stateAfterBefore, state } from '@/constants/constants'
import { FiCheck } from 'react-icons/fi'

const CMP02 = ({
	index = 1,
	stepState = state.active,
	title = '',
	first = false,
	last = false,
}) => {
	const [currentStep, setCurrentStep] = React.useState(stepState)
	useEffect(() => {
		setCurrentStep(stepState)
	}, [stepState, index])

	return (
		<StepperBar
			step={currentStep}
			index={index}
			stateAfterBefore={stateAfterBefore}
			stateCss={stateCss}
			first={first}
			last={last}
		>
			<div>
				<span>
					{currentStep === state.success ||
          currentStep == state.successActive ? (
							<FiCheck />
						) : (
							index
						)}
				</span>
			</div>
			<div>{title}</div>
		</StepperBar>
	)
}

export default CMP02

const StepperBar = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  gap: 14px;
  position: relative;
  margin: 18px 0;  
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.last ? 'none' : 'block')};
    width: 2px;
    bottom: -20px;
    ${(props) => props.stateAfterBefore[props.step]}
    z-index: 1;
    left: 21.5px;
  }

  &::before {
    content: "";
    position: absolute;
    display: ${(props) => (props.first? 'none' : 'block')};
    width: 2px;
    top: -20px;
    ${(props) => props.stateAfterBefore[props.step]}
    z-index: 1;
    left: 21.5px;
  }
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    ${(props) => props.stateCss[props.step]}
    border-radius: 50%;
    position: relative;
    z-index: 999;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      background: linear-gradient(
        -45deg,
        var(--secundary-accent-secundary-accent-900) 0%,
        var(--secundary-accent-secundary-accent-200) 100%
      );
      ${(props) =>
		props.step === 'disable' &&
        'background: var(--neutral-gray-colors-neutral-white);'}
      ${(props) =>
		props.step === 'success' &&
        'background: linear-gradient(-45deg,var(--secundary-accent-secundary-accent-900) 0%,var(--secundary-accent-secundary-accent-200) 100%);'}
      border-radius: 50%;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: ${(props) =>
		props.step === 'disable'
			? 'var(--primary-blue-primary-blue-200)'
			: 'var(--primary-blue-primary-blue-900)'};
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--neutral-gray-colors-neutral-white);
    //styleName: Body/Body Medium  - Montserrat Medium;
    font-family: Montserrat_regular;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    color: ${(props) => (props.step === 'disable' ? 'var(--primary-blue-primary-blue-200)' : 'var(--neutral-gray-colors-neutral-white)')};
    text-align: left;
  }
`

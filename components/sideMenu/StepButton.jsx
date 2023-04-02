/**
 * @file StepButton.jsx
 * @description Boton de stepper.
 * @componentNumber CMP02
 * 
 */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { stateCss, stateAfterBefore, state } from '@/constants/constants'
import { FiCheck } from 'react-icons/fi'
import { setCurrentIndex } from '@/store/slices/configSlice'
import usePage from '@/hooks/usePage'

const StepButton = ({
	index = 0,
	stepStatus = state.active,
	title = '',
	first = false,
	last = false,
	url = '/error',
	onCLick= null
}) => {
	const [stepCurrentState, setStepCurrentState] = useState(stepStatus)
	const handleClick = () => {
		console.log('click')
		if (onCLick) {
			onCLick()
		}
	}

	useEffect(() => {
		setStepCurrentState(stepStatus) //set the current state
	}, [stepStatus, index])

	return (
		<StepperBar
			step={stepCurrentState}
			index={index}
			stateAfterBefore={stateAfterBefore}
			stateCss={stateCss}
			first={first}
			last={last}
			onClick={() => handleClick()}
		>
			<div data-url={url}>
				<span>
					{stepCurrentState === state.success ||
          stepCurrentState == state.successActive ? (
							<FiCheck />
						) : (
							index + 1
						)}
				</span>
			</div>
			<div>{title}</div>
		</StepperBar>
	)
}

export default StepButton

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
    display: ${(props) => (props.first ? 'none' : 'block')};
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
		props.step === 'activeUnselected' &&
        'background: linear-gradient(-45deg,var(--secundary-accent-secundary-accent-900) 0%,var(--secundary-accent-secundary-accent-200) 100%);'}
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
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;

    color: ${(props) =>
		props.step === 'disable'
			? 'var(--primary-blue-primary-blue-200)'
			: 'var(--neutral-gray-colors-neutral-white)'};
  }
`

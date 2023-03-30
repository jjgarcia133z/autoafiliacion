import React from 'react'
import styled from 'styled-components'
import Loading from '../common/Loading'

// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP08 = ({
	text,
	style = 'primary',
	Icon = false,
	disabled = false,
	onClickHandle = null,
	isLoading = false,
}) => {
	const handleClick = () => {
		if (onClickHandle) {
			onClickHandle()
		}
	}
	return (
		<Btn
			style={BtnStyles[style]}
			disabled={disabled}
			onClick={() => handleClick()}
			isLoading={isLoading}
		>
			{isLoading && <Loading />}
			{Icon && !isLoading && <Icon />}
			{!isLoading && <span>{text}</span>}
		</Btn>
	)
}

export default CMP08

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 8px;
  width: fit-content;
  padding: ${(props) => props.style.varPadding};
  height: ${(props) => props.style.varHeight};
  ${(props) => {
		props.style.font
	}}

  color: var(${(props) => props.style.varTextColor});
  background: var(${(props) => props.style.varBackgroundColor});
  border: 1px solid var(${(props) => props.style.varBorderColor});
  & > span {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
  & > i {
    font-weight: 500;
    font-size: 24px;
  }
  &:hover {
    background: var(${(props) => props.style.varHoverColor});
    color: var(${(props) => props.style.varTextHoverColor});
  }
  &:focus {
    background: var(${(props) => props.style.varFocusColor});
    color: var(${(props) => props.style.varTextFocusColor});
  }
  &:disabled {
    background: var(${(props) => props.style.varDisableDColor});
    color: var(${(props) => props.style.varTextDisabledColor});
  }
  &:active {
    background: var(${(props) => props.style.varPressColor});
    color: var(${(props) => props.style.varTextPressColor});
  }
`
const BtnStyles = {
	primary: {
		varTextColor: '--primary-blue-primary-blue-900',
		varTextDisabledColor: '--primary-green-primary-green-700',
		varTextFocusColor: '--neutral-gray-colors-neutral-white',
		varTextPressColor: '--neutral-gray-colors-neutral-white',
		varBackgroundColor: '--primary-green-primary-green-main-500',
		varHoverColor: '--primary-green-primary-green-300',
		varFocusColor: '--primary-green-primary-green-800',
		varPressColor: '--primary-green-primary-green-800',
		varDisableDColor: '--primary-green-primary-green-100',
		varBorderColor: '--neutral-gray-colors-neutral-medium-grey',
		varPadding: '8px 16px 8px 16px',
		varHeight: '48px',
		font: {
			fontFamily: 'Montserrat',
			fontSize: '16px',
			fontWeight: 500,
			lineHeight: '19px',
			letterSpacing: '0px',
			textAlign: 'left',
		},
	},
	primaryLarge: {
		varTextColor: '--primary-blue-primary-blue-900',
		varTextDisabledColor: '--primary-green-primary-green-700',
		varTextFocusColor: '--neutral-gray-colors-neutral-white',
		varTextPressColor: '--neutral-gray-colors-neutral-white',
		varBackgroundColor: '--primary-green-primary-green-main-500',
		varHoverColor: '--primary-green-primary-green-300',
		varFocusColor: '--primary-green-primary-green-800',
		varPressColor: '--primary-green-primary-green-800',
		varDisableDColor: '--primary-green-primary-green-100',
		varBorderColor: '--neutral-gray-colors-neutral-medium-grey',
		varPadding: '8px 48px 8px 48px',
		varHeight: '48px',
		font: {
			fontFamily: 'Montserrat',
			fontSize: '16px',
			fontWeight: 500,
			lineHeight: '19px',
			letterSpacing: '0px',
			textAlign: 'left',
		},
	},

	secondary: {
		varTextColor: '--primary-blue-primary-blue-900',
		varTextDisabledColor: '--neutral-gray-colors-neutral-dark-light-grey',
		varTextFocusColor: '--neutral-gray-colors-neutral-white',
		varTextPressColor: '--neutral-gray-colors-neutral-white',
		varBackgroundColor: '--neutral-gray-colors-neutral-white',
		varHoverColor: '--neutral-gray-colors-neutral-medium-light-grey',
		varFocusColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varPressColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varDisableDColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varBorderColor: '--neutral-gray-colors-neutral-medium-grey',
		varPadding: '8px 16px 8px 16px',
		varHeight: '48px',
		font: {
			fontFamily: 'Montserrat',
			fontSize: '16px',
			fontWeight: 500,
			lineHeight: '19px',
			letterSpacing: '0px',
			textAlign: 'left',
		},
	},
	secondaryLarge: {
		varTextColor: '--primary-blue-primary-blue-900',
		varTextDisabledColor: '--neutral-gray-colors-neutral-dark-light-grey',
		varTextFocusColor: '--neutral-gray-colors-neutral-white',
		varTextPressColor: '--neutral-gray-colors-neutral-white',
		varBackgroundColor: '--neutral-gray-colors-neutral-white',
		varHoverColor: '--neutral-gray-colors-neutral-medium-light-grey',
		varFocusColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varPressColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varDisableDColor: ' --neutral-gray-colors-neutral-medium-light-grey',
		varBorderColor: '--neutral-gray-colors-neutral-medium-grey',
		varPadding: '8px 48px 8px 48px',
		varHeight: '48px',
		font: {
			fontFamily: 'Montserrat',
			fontSize: '16px',
			fontWeight: 500,
			lineHeight: '19px',
			letterSpacing: '0px',
			textAlign: 'left',
		},
	},
}

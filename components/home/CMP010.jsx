import React from 'react'
import styled from 'styled-components'

// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = ({
	text,
	style = 'primary',
	Icon = null,
	padding = '8px 48px 8px 48px',
}) => {
	return (
		<Btn style={BtnStyles[style]} padding={padding}>
			<span>{Icon && <Icon />}</span>
			<span>{text}</span>
		</Btn>
	)
}

export default CMP10

const Btn = styled.button`
  height: 48px;
  width: 139px;
  border-radius: 5px;
  padding: ${(props) => props.padding};

  //styleName: Body/Body Medium  - Montserrat Medium;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;

  color: var(${(props) => props.style.varTextColor});
  background: var(${(props) => props.style.varBackgroundColor});
  border: 1px solid var(${(props) => props.style.varBorderColor});
  &:hover {
    background: var(${(props) => props.style.varHoverColor});
  }
  &:focus {
    background: var(${(props) => props.style.varFocusColor});
  }
  &:active {
    background: var(${(props) => props.style.varPressColor});
  }
  &:disabled {
    background: var(${(props) => props.style.varDisableDColor});
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
		varTextColor: '#fff',
		varBackgroundColor: '--neutral-gray-colors-neutral-white',
		varHoverColor: '#ddd',
		varFocusColor: ' #ccc',
		varPressColor: ' #ccc',
		varDisableDColor: ' #eee',
		varBorderColor: '--neutral-gray-colors-neutral-medium-grey',
	},
}

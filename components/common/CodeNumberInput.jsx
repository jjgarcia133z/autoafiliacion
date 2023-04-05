/**
 * @file CodeNumberInput.jsx
 * @description Componente que muestra el input de código de validación.
 * @componentNumber CMP029
 */

import React from 'react'
import styled from 'styled-components'

const CodeNumberInput = ({ inputCode, codeDisabled, onChange }) => {
	const [code, setCode] = React.useState('')

	const handleChange = (e) => {
		const value = e.target.value
		// Call onChange if value is a number
		if (value.match(/^[0-9]*$/)) {
			setCode(value)
			onChange(value)
			//execute tab event key
			if (value.length === 1) {
				e.target.blur()
				//validate if next input is not disabled and has next input
				if (e.target.nextSibling && !e.target.nextSibling.disabled) {
					e.target.nextSibling.focus()
				}
			}
		}
	}

	return (
		<InputCode
			onChange={handleChange}
			maxLength={1}
			disabled={inputCode.disabled}
			type="text"
			value={code}
			codeDisabled={codeDisabled}
		/>
	)
}

export default CodeNumberInput

const InputCode = styled.input`
  width: 74px;
  height: 74px;
  border: 1px solid var(--primary-blue-primary-blue-100);
  background: ${(props) =>
		props.codeDisabled
			? 'var(--neutral-gray-colors-neutral-medium-light-grey)'
			: 'var(--neutral-gray-colors-neutral-white)'};
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: center;

  color: var(--primary-blue-primary-blue-main-500);
`

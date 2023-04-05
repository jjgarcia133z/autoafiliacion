/**
 * @file CodeNumberGroup.jsx
 * @description Componente que muestra el grupo de inputs de código de validación.
 * @componentNumber CMP027
 */
import React, { useState } from 'react'
import CodeNumberInput from './CodeNumberInput'

const CodeNumberGroup = ({ inputCode, codeDisabled, validateCode, }) => {
	// inicializamos el estado del grupo de códigos con 6 elementos vacíos
	const [groupCode, setGroupCode] =useState(['', '', '', '', '', ''])

	// función que se ejecuta cada vez que cambia el valor de uno de los inputs
	const handleChange = (codePosition, value) => {
		// clonamos el estado actual del grupo de códigos
		const updatedGroupCode = [...groupCode]
		// actualizamos el valor en la posición correspondiente con el valor del input
		updatedGroupCode[codePosition] = value
		// actualizamos el estado del grupo de códigos con el nuevo valor
		setGroupCode(updatedGroupCode)
		// comprobamos si todos los elementos del grupo de códigos tienen valor
		if (updatedGroupCode.every((code) => code !== '')) {
			// mostramos una alerta con el código completo generado a partir de los valores del grupo de códigos
			validateCode(updatedGroupCode.join(''))
		}else{
			validateCode('')
		}

	}
	return (
		<div>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(0, value)}
			/>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(1, value)}
			/>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(2, value)}
			/>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(3, value)}
			/>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(4, value)}
			/>
			<CodeNumberInput
				inputCode={inputCode}
				codeDisabled={codeDisabled}
				onChange={(value) => handleChange(5, value)}
			/>
		</div>
	)
}

export default CodeNumberGroup

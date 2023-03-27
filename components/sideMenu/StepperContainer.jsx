/**
 * @file StepperContainer.jsx
 * @description Contenedor de steppers.
 * @componentNumber CMP03
 */
import React from 'react'
import styled from 'styled-components'
import StepButton from './StepButton'
import { state } from '@/constants/constants'

const CMP03 = () => {
	return (
		<StepperBar>
			<StepButton
				title="Tipo plan"
				index={1}
				stepState={state.active}
				first={true}
			/>
			<StepButton
				title="Datos personales"
				index={2}
				stepState={state.active}
			/>
			<StepButton
				title="Agregar beneficiarios"
				index={3}
				stepState={state.successActive}
			/>
			<StepButton
				title="Resumen"
				index={4}
				stepState={state.success}
			/>
			<StepButton
				title="Metodo de pago"
				index={5}
				stepState={state.disable}
			/>
			<StepButton
				title="Datos de tu cuenta"
				index={6}
				stepNumber="6"
				stepState={state.disable}
				last={true}
			/>
		</StepperBar>
	)
}

export default CMP03

const StepperBar = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`

import React from 'react'
import styled from 'styled-components'
import CMP02 from './CMP02'
import { state } from '@/constants/constants'

const CMP03 = () => {
	return (
		<StepperBar>
			<CMP02
				title="Tipo plan"
				index={1}
				stepState={state.active}
				first={true}
			/>
			<CMP02
				title="Datos personales"
				index={2}
				stepState={state.active}
			/>
			<CMP02
				title="Agregar beneficiarios"
				index={3}
				stepState={state.successActive}
			/>
			<CMP02
				title="Resumen"
				index={4}
				stepState={state.success}
			/>
			<CMP02
				title="Metodo de pago"
				index={5}
				stepState={state.disable}
			/>
			<CMP02
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

/**
 * @file PoliticaDePrivacidad.jsx
 * @description Contenedor de politica de privacidad.
 * @componentNumber CMP07.5
 */
import { setWelcomeModal } from '@/store/slices/configSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import CMP08 from '../home/CMP08'
const PoliticaDePrivacidad = ({acept}) => {
	const iframeUrl = 'https://medismart.net/wp-content/uploads/2021/12/TERMINOS-Y-CONDICIONES-MEDISMART-PLAN-DE-MEDICINA-PREPAGADA-REV-6_1.pdf'
	// const iframeUrl = '/politica.html'
	return (
		<IframeContainer>
			<iframe
				src={iframeUrl}
				title="Contenido HTML"
				width="100%"
				height="100%"
				allowFullScreen
				style={{
					width: '100%',
					height: '100%',
					border: 'none',
					WebkitScrollbarWidth: '0.5rem',
					WebkitScrollbarTrackBackground: 'var(--neutral-background-neutral-sand-200)',
					WebkitScrollbarThumbBackground: 'var(--neutral-gray-colors-neutral-medium-light-grey)',
					WebkitScrollbarThumbBorderRadius: '0.5rem',
				}}
			/>
			<CMP08 text="Aceptar la política de privacidad" style="primaryLarge" onClickHandle={acept} />
		</IframeContainer>
	)
}

export default PoliticaDePrivacidad

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19.54px;
  border: none;
  width: 100%;
  height: 485px;
  margin-top: 58px;

  & iframe {
    display: flex;
    border: none;
    width: 100%;
    height: 485px;
  }
`

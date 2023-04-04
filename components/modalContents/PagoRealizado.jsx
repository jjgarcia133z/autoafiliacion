/**
 * @file PagoRealizado.jsx
 * @description Componente que muestra el contenido del modal de pago realizado
 * @componentNumber CMP042.5
 */
import React from 'react'
import PagoOk from '@/assets/img/pago_ok.png'
import styled from 'styled-components'
import Button from '../common/Button'
import { useDispatch } from 'react-redux'
import { setPagoOkModal } from '@/store/slices/configSlice'
const PagoRealizado = ({ email = 'xxxxxxx@dominio.com' }) => {
	const dispatch = useDispatch()
	const funcOnClose = () => {
		dispatch(setPagoOkModal(false))
	}
	return (
		<PagoOkModal>
			<p>¡Gracias por afiliarte! Ahora sos parte de la familia MediSmart.</p>
			<p>
        Pronto recibirás tu contrato y factura electrónica al correo {email}
			</p>
			<div>
				<img src={PagoOk.src} alt="PagoOk" />
			</div>
			<div>
				<Button
					text="Empecemos"
					style="primaryLarge"
					onClickHandle={funcOnClose}
				/>
			</div>
		</PagoOkModal>
	)
}

export default PagoRealizado

const PagoOkModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & p:nth-child(1) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 16px;
    max-width: 706px;
    color: var(--primary-blue-primary-blue-main-500);
  }
  & p:nth-child(2) {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    max-width: 706px;
    margin-bottom: 35.25px;
    color: var(--primary-blue-primary-blue-main-500);
  }
  & > div:nth-of-type(1) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 400px;
      margin-bottom: 43.63px;
    }
  }
  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

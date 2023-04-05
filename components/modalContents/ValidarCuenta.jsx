/**
 * @file ValidarCuenta.jsx
 * @description Componente que muestra el contenido del modal de validación de cuenta.
 * @componentNumber CMP027
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { useDispatch } from 'react-redux'
import { Mobile, Mail } from '@/components/icons/Icons'
import usePage from '@/hooks/usePage'
import CodeNumberGroup from '../common/CodeNumberGroup'
import { setCurrentIndex } from '@/store/slices/configSlice'
const ValidarCuenta = () => {
	const [codeToValidate, setCodeToValidate] = useState(true)
	const [inputCode, setInputCode] = useState(true)
	const [buttonSMS, setButtonSMS] = useState({
		disabled: false,
		style: 'primaryLargeDisable',
	})
	const [buttonEmail, setButtonEmail] = useState({
		disabled: false,
		style: 'primaryLargeDisable',
	})

	const { goTo, updateStepStatus } = usePage()
	const dispatch = useDispatch()
	const funcOnClose = () => {
		console.log('funcOnClose')
	}

	const handleClickButtonSMS = () => {
		setButtonSMS({
			disabled: false,
			style: 'primaryLargeSelect',
		})
		setInputCode(false)

		setButtonEmail({
			disabled: true,
			style: 'primaryLargeDisable',
		})
	}
	const handleClickButtonEmail = () => {
		setButtonEmail({
			disabled: false,
			style: 'primaryLargeSelect',
		})
		setInputCode(false)
		setButtonSMS({
			disabled: true,
			style: 'primaryLargeDisable',
		})
	}

	const handleClickNext = () => {
		const url = '/resumen'
		console.log('url', url)
		goTo(url, () => {
			dispatch(setCurrentIndex(3))
			updateStepStatus(3, url, false)
		})
	}
	const validateCode = (code) => {
		console.log(code)
		if (code.length === 6) {
			setCodeToValidate(false)
		} else {
			setCodeToValidate(true)
		}
	}
	return (
		<PagoOkModal>
			<p>
        Ingresá el código de 6 dígitos que te enviaremos al medio de tu
        preferencia.
			</p>
			<div>
				<span>¿Donde querés recibir el código de verificación?</span>
				<ButtonsRow>
					<div>
						<Button
							text="Enviar por SMS"
							disabled={buttonSMS.disabled}
							style={buttonSMS.style}
							Icon={Mobile}
							onClickHandle={handleClickButtonSMS}
						/>
						<span>Al número: 86*****3</span>
					</div>
					<div>
						<Button
							disabled={buttonEmail.disabled}
							text="Enviar por Email"
							style={buttonEmail.style}
							Icon={Mail}
							onClickHandle={handleClickButtonEmail}
						/>
						<span>Al correo: Ef****il.com</span>
					</div>
				</ButtonsRow>
				<InputCode codeDisabled={inputCode}>
					<span>Ingresá el código de verificación que recibiste</span>
					<CodeNumberGroup
						inputCode={inputCode}
						codeDisabled={inputCode}
						validateCode={validateCode}
					/>
					<span>No he recibido el código, volver a enviarlo</span>
				</InputCode>
				<Row>
					<Button
						tabIndex={0}
						text="Cancelar"
						style="secondaryLarge"
						onClick={funcOnClose}
					/>
					<Button
						tabIndex={0}
						text="Validar código"
						disabled={codeToValidate}
						style="primaryLarge"
						onClickHandle={handleClickNext}
					/>
				</Row>
			</div>
			<div></div>
		</PagoOkModal>
	)
}

export default ValidarCuenta
const InputCode = styled.div`
  display: flex;
  flex-direction: column;
  & > span:nth-child(1) {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;

    color: var(--primary-blue-primary-blue-900);
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
  }
  & > span:nth-child(3) {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--primary-blue-primary-blue-900);
    margin-top: 16px;
    margin-bottom: 51px;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 34px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
`
const ButtonsRow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 34px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    & > span {
      margin-top: 8px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: var(--primary-blue-primary-blue-main-500);
    }
  }
`
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
    margin-top: 26px; // 26px + 16px = 42px
    margin-bottom: 32px;
    max-width: 706px;
    color: var(--primary-blue-primary-blue-900);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: var(--primary-blue-primary-blue-900);
    }
  }
  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

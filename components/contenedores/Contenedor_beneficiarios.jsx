/**
 * @file Contenedor_beneficiarios.jsx
 * @description Contenedor de datos de beneficiario.
 * @componentNumber CMP012_5
 */

import React from 'react'
import styled from 'styled-components'
import CMP044 from '../common/CMP044'
import Button from '../common/Button'
import CMP010 from '../home/CMP010'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import AgregarBeneficiarioCard from '../common/AgregarBeneficiarioCard'
import RowBeneficiario from '../RowBeneficiario'
import ModalContainer from '../common/ModalContainer'
import ValidarCuenta from '../modalContents/ValidarCuenta'

const Contenedor_beneficiarios = () => {
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
		})
	}
	const handleClickNext = () => {
		const url = '/resumen'
		goTo(url, () => {
			dispatch(setCurrentIndex(3))
			updateStepStatus(3, url, false)
		})
	}
	const agregarBeneficiarioHandler = () => {
		goTo('/agregar-beneficiarios')
	}
	const agregarMascotaHandler = () => {
		goTo('/agregar-mascota')
	}

	return (
		<Container portada={ImagePortada2}>
			<div>
				<CMP044 title="¿Deseás agregar algún beneficiario?" />
			</div>
			<Row>
				<AgregarBeneficiarioCard
					description="Afiliá un amigo o familiar, para que tenga tus mismos beneficios"
					title="Persona"
					price="13.26"
					type="persona"
					forType="por mes"
					func={agregarBeneficiarioHandler}
				/>
				<AgregarBeneficiarioCard
					description="Afiliá a tu perro o gato y aprovechá beneficios para cuidar de su salud."
					title="Mascota"
					price="13.26"
					type="mascota"
					forType="por cada una"
					func={agregarMascotaHandler}
				/>
			</Row>
			<Row>
				<RowBeneficiario show={true} maxWidth="918px" name="Pablito" benficiario="hijo"  />
			</Row>
			<Row>
				<Button
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<CMP010
					text="Continuar"
					style="primaryLarge"
					onClickHandle={handleClickNext}
				/>
			</Row>
			{true && (
				<ModalContainer
					title="Necesitamos validar tu cuenta"
					showModal={true}
					setModal={() => console.log('cerrar')}
					funcOnClose={null}
				>
					<ValidarCuenta email="email@dominio.com" />
				</ModalContainer>
			)}
		</Container>
	)
}

export default Contenedor_beneficiarios
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 32px 32px 32px;
  background-color: var(--neutral-background-neutral-olive-100);
  & > span:nth-child(1) {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    z-index: 0;
    background: url(${(props) => props.portada.src});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 230px;
    width: 310px;
    border-radius: 10px;
  }
  & > div:first-of-type {
    margin-bottom: 32px;
  }
  & > div h2 {
    margin-top: 22px;
    //styleName: Body/Body Large - Montserrat Bold;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }
`

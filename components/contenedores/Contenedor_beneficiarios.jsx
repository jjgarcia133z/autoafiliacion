/**
 * @file Contenedor_beneficiarios.jsx
 * @description Contenedor de datos de beneficiario.
 * @componentNumber CMP012_5
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import ContenedoresHeader from '../common/ContenedoresHeader'
import Button from '../common/Button'
import CMP010 from '../home/CMP010'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch, useSelector } from 'react-redux'
import usePage from '@/hooks/usePage'
import AgregarBeneficiarioCard from '../common/AgregarBeneficiarioCard'
import RowBeneficiario from '../RowBeneficiario'
import ModalContainer from '../common/ModalContainer'
import ValidarCuenta from '../modalContents/ValidarCuenta'

const Contenedor_beneficiarios = () => {
	const dispatch = useDispatch()
	const [showModal, setShowModal] = useState(false)
	const { goTo, updateStepStatus } = usePage()
	const { propietario, beneficiarios, mascotas, productosAdicionales } =
    useSelector((state) => state.afiliacion)
	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
		})
	}
	const handleModal = () => {
		setShowModal(!showModal)
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
				<ContenedoresHeader title="¿Deseás agregar algún beneficiario?" />
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
			<Row top={48} bottom={26}>
				<p>
					<span>Beneficiarios </span>
				</p>
			</Row>
			<Row bottom={16}>
				<RowBeneficiario
					bottom={8}
					show={true}
					maxWidth="918px"
					name="Pablito"
					benficiario="hijo"
				/>
			</Row>
			<Row bottom={1}>
				<RowBeneficiario
					bottom={8}
					show={true}
					maxWidth="918px"
					name="Maria"
					benficiario="hija"
				/>
			</Row>
			<Row top={16}>
				<Button
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<CMP010
					text="Continuar"
					style="primaryLarge"
					onClickHandle={handleModal}
				/>
			</Row>
			{showModal && (
				<ModalContainer
					title="Necesitamos validar tu cuenta"
					showModal={true}
					setModal={() => console.log('cerrar')}
					funcOnClose={handleModal}
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
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 16}px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 32px 32px 32px;
  background-color: var(--neutral-background-neutral-olive-100);
  & > div:nth-child(3) > p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
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

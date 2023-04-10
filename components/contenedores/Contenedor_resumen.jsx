/**
 * @file Contenedor_beneficiarios.jsx
 * @description Contenedor de datos de beneficiario.
 * @componentNumber CMP012_5
 */

import React from 'react'
import styled from 'styled-components'
import ContenedoresHeader from '../common/ContenedoresHeader'
import ImagePortada from '@/assets/img/PortadaAfiliacion_medismart3.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import PlanesOptions from '../PlanesOptions'
import TotalAhorroTag from '../TotalAhorroTag'
import RowGroup from '../RowGroup'
import Cupon from '../common/Cupon'
import Button from '../home/CMP010'

const Contenedor_resumen = () => {
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const handleClickLast = () => {
		const url = '/resumen'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
		})
	}
	const handleClickNext = () => {
		const url = '/metodo-pago'
		goTo(url, () => {
			dispatch(setCurrentIndex(4))
			updateStepStatus(4, url, false)
		})
	}

	return (
		<Container portada={ImagePortada}>
			<span></span>
			<div>
				<ContenedoresHeader title="Resumen del pedido" />
			</div>
			<h2>Plan Medismart</h2>
			<Row>
				<PlanesOptions />
				<TotalAhorroTag />
			</Row>
			<Row>
				<RowGroup />
			</Row>
			<Row>
				<Cupon />
				<FacturaResumen>
					<div>
						<span>Sub total</span>
						<span>$ 123.2</span>
					</div>
					<div>
						<span>IVA</span>
						<span>$ 2.17</span>
					</div>
					<div>
						<span>Ahorro</span>
						<span>$ 352</span>
					</div>
					<div>
						<span>Descuento</span>
						<span>$ 1.54</span>
					</div>
					<div>
						<span>Total</span>
						<span>$ 25.58</span>
					</div>
				</FacturaResumen>
			</Row>
			<Row>
				<Button text="Atrás" disabled={false} style="secondaryLarge" onClickHandle={handleClickLast} />
				<Button disabled={false} text="Continuar" style="primaryLarge" onClickHandle={handleClickNext} />
			</Row>
		</Container>
	)
}

export default Contenedor_resumen
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    bottom: -5px;
    right: -5px;
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
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }
  & > h2 {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 32px;
  }
`
const FacturaResumen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 202px;
  background-color: var(--neutral-background-neutral-olive-100);
  border-radius: 10px;
  column-gap: 48px;
  margin-left: 121px;
  
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;

  color: var(--primary-blue-primary-blue-main-500);
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
	gap: 50px;
  }
  & > div:last-of-type > span {
    //styleName: Body/Body Medium - Montserrat Bold;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: right;
	color: var(--primary-blue-primary-blue-main-900);
  }
`

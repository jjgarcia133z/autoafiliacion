/**
 * @file Contenedor_metodo_pago.jsx
 * @description Contenedor de metodo de pago.
 * @componentNumber CMP042
 */
import React from 'react'
import styled from 'styled-components'
import CMP044 from '../common/CMP044'
import ImagePortada from '@/assets/img/PortadaAfiliacion_medismart3.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import Button from '../home/CMP010'
import { Plus } from '../icons/Icons'
import CardImage from '@/assets/img/Section-CreditCard.png'
import Image from 'next/image'
import Tooltip from '../common/Tooltip'
import { position } from '@/constants/constants'

const Contenedor_metodo_pago = () => {
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
		})
	}
	const handleClickPay = () => {
		const url = '/resumen'
		goTo(url, () => {
			dispatch(setCurrentIndex(3))
			updateStepStatus(3, url, false)
		})
	}
  
	const addCreditCard = () => {
		goTo('/agregar-tarjeta')
	}
	return (
		<Container portada={ImagePortada}>
			<div>
				<CMP044 title="Método de pago" />
			</div>
			<Row bottom={217}>
				<CardContainer>
					<Image
						src={CardImage.src}
						width={410}
						height={222}
						alt="CreditCard"
					/>
					<span onClick={() => addCreditCard()}>
						<Plus />
						<Tooltip
							text="Agregá tu método de pago."
							show={true}
							tipPosition={position.topRight}
							arrowConerGap={60}
							indicatorrGap={45}
							showClose={false}
							width="230px"
							indicatorPosition={position.bottomLeft}
						/>
					</span>
				</CardContainer>
			</Row>

			<Row>
				<Button text="Atrás" disabled={false} style="secondaryLarge" />
				<Button disabled={true} text="Realizar pago" style="primaryLarge" />
			</Row>
		</Container>
	)
}

export default Contenedor_metodo_pago
const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 410px;
  height: 222px;
  border-radius: 8px;

  & > span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--primary-blue-primary-blue-main-500);
    color: var(--neutral-gray-colors-neutral-white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`
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
    margin-bottom: 60px;
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

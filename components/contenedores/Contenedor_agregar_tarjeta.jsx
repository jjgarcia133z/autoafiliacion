/**
 * @file Contenedor_datos_personales.jsx
 * @description Contenedor de datos personales.
 * @componentNumber CMP011
 */
import React from 'react'
import styled from 'styled-components'
import Select from '../common/Select'
import CMP044 from '../common/CMP044'
import Input from '../common/Input'
import Button from '../common/Button'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex, setStatusReady } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import { Calendar, PlusCircle, Plus } from '../icons/Icons'
import Tooltip from '../common/Tooltip'
import { position } from '@/constants/constants'

const Contenedor_agregar_tarjeta = () => {
	const [showTooltip, setShowTooltip] = React.useState(false)
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
			updateStepStatus(url) //set the current step as active
		})
	}
	const handleClickNext = () => {
		const url = '/beneficiarios'
		updateStepStatus(2, url, false)
	}
	const showTooltipHandler = () => {
		setShowTooltip(!showTooltip)
	}
	const options = [
		{ value: '1', label: 'Visa' },
		{ value: '2', label: 'American Express' },
		{ value: '3', label: 'Mastercard' },
	]

	return (
		<Container portada={ImagePortada2}>
			<span></span>
			<div>
				<CMP044 title="Ingresá los datos de la tarjeta" />
			</div>

			<Row>
				<Select
					type="text"
					mandatory={true}
					label="Tipo de tarjeta"
					placeholder="Seleccioná el tipo de tarjeta"
					state=""
					helperText="Identificacion incorrecta"
					options={options}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Número de tarjeta"
					placeholder="Ingresá el número de tarjeta"
					helperText="Tarjeta incorrecta"
					state="none"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Fecha de vencimiento"
					placeholder="MM/AA"
					helperText="Identificacion incorrecta"
					state="none"
					Icon={Calendar}
					Value=""
					TootTip={Tooltip}
					tooltipProps={{
						show:showTooltip,
						text:'El código CVV lo podés observar en la parte de atrás de tu tarjeta',
						tipPosition:position.rightMid,
						arrowConerGap:60,
						indicatorrGap:45,
						showClose:true,
						width:'205px',
						indicatorPosition:position.leftMid,
					}}
					iconAction={showTooltipHandler}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Codigo CVV"
					placeholder="MM/AA"
					helperText="Ingresá el código de seguridad"
					state="none"
					Icon={PlusCircle}
					value=""
				/>
			</Row>
			<Row>
				<Button
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<Button
					disabled={true}
					text="Agregar tarjeta"
					style="primaryLarge"
					onClickHandle={handleClickNext}
					Icon={Plus}
				/>
			</Row>
		</Container>
	)
}

export default Contenedor_agregar_tarjeta
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

/**
 * @file Contenedor_agregar_beneficiarios.jsx
 * @description Contenedor de datos de beneficiario.
 * @componentNumber CMP013
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import FilterSelect from '../common/FilterSelect'
import Select from '../common/Select'
import ContenedoresHeader from '../common/ContenedoresHeader'
import PlanOnco from '../home/PlanOnco'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import Button from '../common/Button'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import { Plus } from '../icons/Icons'
const Contenedor_agregar_beneficiarios = () => {
	const dispatch = useDispatch()
	const { goTo } = usePage()
	const handleClickCancel = () => {
		goTo('/beneficiarios', () => {
			dispatch(setCurrentIndex(4))
		})
	}
	const handleClickAdd = () => {
		goTo('/beneficiarios', () => {
			dispatch(setCurrentIndex(4))
		})
	}
	return (
		<Container>
			<div>
				<ContenedoresHeader title="Ingresá los datos del beneficiario" />
			</div>

			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Tipo de indentificación"
					placeholder="Seleccioná tipo de identificación"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Número de indentificación"
					placeholder="ingresá tu identificación"
				/>
			</Row>
			<Row>
				<Select
					type="text"
					mandatory={false}
					label="Género"
					placeholder="Seleccióna tipo de género"
				/>

				<Input
					type="text"
					mandatory={true}
					label="Parentesco"
					placeholder="Seleccioná el parentesco"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Nombre"
					placeholder="Ingresá tu nombre"
				/>
				<Input
					type="text"
					mandatory={true}
					label="Primer Apellido"
					placeholder="Ingresá tu primer apellido"
				/>
				<Input
					type="text"
					mandatory={true}
					label="Segundo Apellido"
					placeholder="Ingresá tu primer apellido"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Correo electrónico"
					placeholder="Ingresá tu correo electrónico"
				/>
			</Row>

			<Row>
				<FilterSelect />
				<FilterSelect />
			</Row>
			<Row bottom={32}>
				<h2>Datos de residencia</h2>
			</Row>
			<Row>
				<Select
					type="text"
					mandatory={false}
					label="Provincia"
					placeholder="Seleccioná la provincia"
				/>
				<Select
					type="text"
					mandatory={false}
					label="Cantón"
					placeholder="Seleccioná el cantón"
				/>
				<Select
					type="text"
					mandatory={false}
					label="Distrito"
					placeholder="Seleccioná el distrito"
				/>
			</Row>
			<Row>
				<TextArea
					label="Dirección exacta"
					placeholder="Ingresá tu dirección de domicilio"
				/>
			</Row>
			<Row bottom={32}>
				<h2>Planes adicionales</h2>
			</Row>
			<Row>
				<PlanOnco />
			</Row>
			<Row>
				<Button
					text="Cancelar"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickCancel}
				/>
				<Button
					text="Agregar"
					Icon={Plus}
					style="primaryLarge"
					onClickHandle={handleClickAdd}
				/>
			</Row>
		</Container>
	)
}

export default Contenedor_agregar_beneficiarios
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

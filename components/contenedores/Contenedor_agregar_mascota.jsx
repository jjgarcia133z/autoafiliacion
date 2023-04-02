/**
 * @file Contenedor_agregar_mascota.jsx
 * @description Contenedor de agregar mascota.
 * @componentNumber CMP014
 */
import React from 'react'
import styled from 'styled-components'
import Select from '../common/Select'
import CMP044 from '../common/CMP044'
import Input from '../common/Input'
import Button from '../common/Button'
import { Plus } from '../icons/Icons'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import { setCurrentIndex } from '@/store/slices/configSlice'
import Calendario from '../common/Calendario'

const Contenedor_agregar_mascota = () => {
	const dispatch = useDispatch()
	const { goTo } = usePage()
	const handleClickAdd = () => {
		goTo('/beneficiarios', () => {
			dispatch(setCurrentIndex(3))
		})
	}
	const handleClickCancel = () => {
		goTo('/beneficiarios', () => {
			dispatch(setCurrentIndex(3))
		})
	}
	return (
		<Container>
			<div>
				<CMP044 title="Ingresá los datos de la mascota" />
			</div>

			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Tipo de mascota"
					placeholder="Seleccioná el tipo de mascota"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Nombre de la mascota"
					placeholder="Ingresá el nombre de la mascota"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Color"
					placeholder="Ingresá el color"
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Raza"
					placeholder="Ingresá la Raza"
				/>
			
			</Row>
			<Row>
				<Calendario type="text"
					mandatory={true}
					label="Fecha de nacimiento"
					placeholder="Ingresá la fecha de nacimiento"
					 />
				<Input
					type="text"
					mandatory={true}
					label="Edad"
					placeholder=""
				/>
			</Row>
			<Row>
				<Select
					type="text"
					mandatory={true}
					label="Sexo"
					placeholder="Seleccioná el sexo del animal"
				/>
			
			</Row>	
			
			<Row>
				<Button text="Cancelar" style='secondaryLarge' onClickHandle={handleClickCancel} />
				<Button text="Agregar" style='primaryLarge' Icon={Plus} onClickHandle={handleClickAdd} />
			</Row>
		</Container>
	)
}

export default Contenedor_agregar_mascota
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
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

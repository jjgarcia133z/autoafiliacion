/**
 * @file Contenedor_datos_personales.jsx
 * @description Contenedor de datos personales.
 * @componentNumber CMP011
 */
import React from 'react'
import styled from 'styled-components'
import CMP011_5 from '../common/CMP011_5'
import CMP038 from '../common/CMP038'
import CMP044 from '../common/CMP044'
import CMP020 from '../home/CMP020'
import Input from '../home/Input'
import CMP040 from '../home/CMP040'
import PoliticaCheckbox from '../home/PoliticaCheckbox'
import CMP08 from '../home/CMP08'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex, setStatusReady } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import { state } from '@/constants/constants'

const Contenedor_datos_personales = () => {
	const [politicaStatus, setPoliticaStatus] = React.useState(false)
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const handleClickLast = () => {
		let url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
			updateStepStatus(url) //set the current step as active
		})
	}
	const handleClickNext = () => {
		let url = '/beneficiarios'
		goTo(url, () => {
			dispatch(setCurrentIndex(3))
			updateStepStatus(url) //set the current step as active
			dispatch(setStatusReady(url))
		})
	}
	const options = [
		{ value: '1', label: 'Cedula de nacional' },
		{ value: '2', label: 'Cedula de extranjeria' },
		{ value: '3', label: 'Pasaporte' },
		{ value: '4', label: 'Tarjeta de identidad' },
	]
	const generos = [
		{ value: '1', label: 'Masculino' },
		{ value: '2', label: 'Femenino' },
	]

	const provinciasCostarica = [
		{ value: '1', label: 'San José' },
		{ value: '2', label: 'Alajuela' },
		{ value: '3', label: 'Cartago' },
		{ value: '4', label: 'Heredia' },
		{ value: '5', label: 'Guanacaste' },
		{ value: '6', label: 'Puntarenas' },
		{ value: '7', label: 'Limón' },
	]
	const cantonesCostarica = [
		{ value: '1', label: 'San José' },
		{ value: '1', label: 'Escazu' },
		{ value: '1', label: 'Desamparados' },
		{ value: '1', label: 'Puriscal' },
		{ value: '1', label: 'Tarrazu' },
		{ value: '1', label: 'Aserrí' },
		{ value: '1', label: 'Mora' },
		{ value: '1', label: 'Goicoechea' },
		{ value: '1', label: 'Santa Ana' },
		{ value: '1', label: 'Alajuelita' },
		{ value: '1', label: 'Vázquez de Coronado' },
		{ value: '1', label: 'Acosta' },
		{ value: '1', label: 'Tibás' },
		{ value: '1', label: 'Moravia' },
		{ value: '1', label: 'Montes de Oca' },
		{ value: '1', label: 'Turrubares' },
		{ value: '1', label: 'Dota' },
		{ value: '1', label: 'Curridabat' },
		{ value: '1', label: 'Pérez Zeledón' },
		{ value: '1', label: 'León Cortés' },
		{ value: '2', label: 'Alajuela' },
		{ value: '2', label: 'San Ramón' },
		{ value: '2', label: 'Grecia' },
		{ value: '2', label: 'San Mateo' },
		{ value: '2', label: 'Atenas' },
		{ value: '2', label: 'Naranjo' },
		{ value: '2', label: 'Palmares' },
		{ value: '2', label: 'Poás' },
		{ value: '2', label: 'Orotina' },
		{ value: '2', label: 'San Carlos' },
		{ value: '2', label: 'Zarcero' },
		{ value: '2', label: 'Valverde Vega' },
		{ value: '2', label: 'Upala' },
		{ value: '2', label: 'Los Chiles' },
		{ value: '2', label: 'Guatuso' },
		{ value: '2', label: 'Río Cuarto' },
		{ value: '3', label: 'Cartago' },
		{ value: '3', label: 'Paraíso' },
		{ value: '3', label: 'La Unión' },
		{ value: '3', label: 'Jiménez' },
		{ value: '3', label: 'Turrialba' },
		{ value: '3', label: 'Alvarado' },
		{ value: '3', label: 'Oreamuno' },
		{ value: '3', label: 'El Guarco' },
		{ value: '4', label: 'Heredia' },
		{ value: '4', label: 'Barva' },
		{ value: '4', label: 'Santo Domingo' },
		{ value: '4', label: 'Santa Bárbara' },
		{ value: '4', label: 'San Rafael' },
		{ value: '4', label: 'San Isidro' },
		{ value: '4', label: 'Belén' },
		{ value: '4', label: 'Flores' },
		{ value: '4', label: 'San Pablo' },
		{ value: '4', label: 'Sarapiquí' },
		{ value: '5', label: 'Liberia' },
		{ value: '5', label: 'Nicoya' },
		{ value: '5', label: 'Santa Cruz' },
		{ value: '5', label: 'Bagaces' },
		{ value: '5', label: 'Carrillo' },
		{ value: '5', label: 'Cañas' },
		{ value: '5', label: 'Abangares' },
		{ value: '5', label: 'Tilarán' },
		{ value: '5', label: 'Nandayure' },
		{ value: '5', label: 'La Cruz' },
		{ value: '5', label: 'Hojancha' },
		{ value: '6', label: 'Puntarenas' },
		{ value: '6', label: 'Esparza' },
		{ value: '6', label: 'Buenos Aires' },
		{ value: '6', label: 'Montes de Oro' },
		{ value: '6', label: 'Osa' },
		{ value: '6', label: 'Quepos' },
		{ value: '6', label: 'Golfito' },
		{ value: '6', label: 'Coto Brus' },
		{ value: '6', label: 'Parrita' },
		{ value: '6', label: 'Corredores' },
		{ value: '6', label: 'Garabito' },
		{ value: '7', label: 'Limón' },
		{ value: '7', label: 'Pococí' },
		{ value: '7', label: 'Siquirres' },
		{ value: '7', label: 'Talamanca' },
		{ value: '7', label: 'Matina' },
		{ value: '7', label: 'Guácimo' },
	]

	const getCantonByProvince = (province) => {
		return cantones.filter((canton) => canton.value === province)
	}

	return (
		<Container portada={ImagePortada2}>
			<span></span>
			<div>
				<CMP044 title="Ingresá tus datos personales" />
			</div>

			<Row>
				<CMP038
					type="text"
					mandatory={true}
					label="Tipo de indentificación"
					placeholder="Seleccioná tipo de identificación"
					state=""
					helperText="Identificacion incorrecta"
					options={options}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Número de indentificación"
					placeholder="ingresá tu identificación"
					helperText="Identificacion incorrecta"
					state="fail"
				/>
			</Row>
			<Row>
				<CMP038
					type="text"
					mandatory={false}
					label="Género"
					placeholder="Seleccióna tipo de género"
					options={generos}
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
				<CMP011_5 />
				<CMP011_5 />
			</Row>
			<Row bottom={32}>
				<h2>Datos de residencia</h2>
			</Row>
			<Row>
				<CMP038
					type="text"
					mandatory={false}
					label="Provincia"
					placeholder="Seleccioná la provincia"
					options={provinciasCostarica}
				/>
				<CMP038
					type="text"
					mandatory={false}
					label="Cantón"
					placeholder="Seleccioná el cantón"
				/>
				<CMP038
					type="text"
					mandatory={false}
					label="Distrito"
					placeholder="Seleccioná el distrito"
				/>
			</Row>
			<Row>
				<CMP040
					label="Dirección exacta"
					placeholder="Ingresá tu dirección de domicilio"
				/>
			</Row>
			<Row bottom={32}>
				<h2>Planes adicionales</h2>
			</Row>
			<Row>
				<CMP020 />
			</Row>
			<Row>
				<PoliticaCheckbox value={politicaStatus} state={setPoliticaStatus} />
			</Row>
			<Row>
				<CMP08
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<CMP08
					disabled={!politicaStatus}
					text="Continuar"
					style="primaryLarge"
					onClickHandle={handleClickNext}
				/>
			</Row>
		</Container>
	)
}

export default Contenedor_datos_personales
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
  padding: 32px;
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

/**
 * @file Contenedor_datos_personales.jsx
 * @description Contenedor de datos personales.
 * @componentNumber CMP011
 */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CMP011_5 from '../common/CMP011_5'
import Select from '../common/Select'
import CMP044 from '../common/CMP044'
import CMP020 from '../home/CMP020'
import Input from '../common/Input'
import CMP040 from '../common/TextArea'
import PoliticaCheckbox from '../home/PoliticaCheckbox'
import Button from '../common/Button'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex, setStatusReady } from '@/store/slices/configSlice'
import {
	setPropietarioInfo,
	setPoliticaDePrivacidad,
} from '@/store/slices/afiliacionSlice'
import { useDispatch, useSelector } from 'react-redux'
import usePage from '@/hooks/usePage'
import useFetch from '@/hooks/UseFetch'
import {
	tipoIdentificacion,
	generos,
	provinciasCostarica,
	cantonesCostarica,
	districtCostarica,
} from '@/constants/constants'
const Contenedor_datos_personales = () => {
	const [politicaStatus, setPoliticaStatus] = useState(false)
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const { fetchData } = useFetch()
	const [inputsStatus, setInputsStatus] = useState({
		tipoIdentificacion: 'none',
		numeroDeIdentificacion: 'none',
		genero: 'none',
		nombre: 'none',
		apellido1: 'none',
		apellido2: 'none',
		correo: 'none',
		telefono1: 'none',
		telefono2: 'none',
		provincia: 'none',
		canton: 'none',
		distrito: 'none',
		direccion: 'none',
	})
	const [identificacionSelected, SetIdentificacionSelected] = useState(0)
	const [generoSeleccionado, setGeneroSeleccionado] = useState(0)
	const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(0)
	const [cantonSeleccionado, setCantonSeleccionado] = useState(0)
	const [distritoSeleccionado, setDistritoSeleccionado] = useState(0)
	const [numeroDeIdentificacion, setNumeroDeIdentificacion] = useState('')
	const [nombre, setNombre] = useState('')
	const [apellido1, setApellido1] = useState('')
	const [apellido2, setApellido2] = useState('')
	const [correo, setCorreo] = useState('')
	const [telefono1, setTelefono1] = useState('')
	const [telefono2, setTelefono2] = useState('')
	const [direccion, setDireccion] = useState('')

	const { propietario } = useSelector((state) => state.afiliacion)

	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
			updateStepStatus(url) //set the current step as active
		})
	}
	const handleClickNext = () => {
		const url = '/beneficiarios'
		let result = true //setPropietario()
		const propietarioJson = {
			tipoIdentificacion: identificacionSelected,
			numeroIdentificacion: numeroDeIdentificacion,
			genero: generoSeleccionado,
			nombre: nombre,
			apellido1: apellido1,
			apellido2: apellido2,
			correo: correo,
			telefono1: telefono1,
			telefono2: telefono2,
			provincia: provinciaSeleccionada,
			canton: cantonSeleccionado,
			distrito: distritoSeleccionado,
			direccion: direccion,
		}
		console.log(propietarioJson)
		dispatch(setPropietarioInfo(propietarioJson))
		if (result) {
			updateStepStatus(2, url, false)
		}
	}
	const setPropietario = () => {
		let errorsCount = 0
		if (numeroDeIdentificacion.length === 9) {
			setInputsStatus({ ...inputsStatus, numeroDeIdentificacion: 'fail' })
			errorsCount++
		}
		if (generoSeleccionado === 0) {
			setInputsStatus({ ...inputsStatus, genero: 'fail' })
			errorsCount++
		}
		if (nombre === '') {
			setInputsStatus({ ...inputsStatus, nombre: 'fail' })
			errorsCount++
		}
		if (apellido1 === '') {
			setInputsStatus({ ...inputsStatus, apellido1: 'fail' })
			errorsCount++
		}
		if (apellido2 === '') {
			setInputsStatus({ ...inputsStatus, apellido2: 'fail' })
			errorsCount++
		}
		if (correo === '') {
			setInputsStatus({ ...inputsStatus, correo: 'fail' })
			errorsCount++
		}
		if (telefono1 === '') {
			setInputsStatus({ ...inputsStatus, telefono1: 'fail' })
			errorsCount++
		}
		if (provinciaSeleccionada === 0) {
			setInputsStatus({ ...inputsStatus, provincia: 'fail' })
			errorsCount++
		}
		if (cantonSeleccionado === 0) {
			setInputsStatus({ ...inputsStatus, canton: 'fail' })
			errorsCount++
		}
		if (distritoSeleccionado === 0) {
			setInputsStatus({ ...inputsStatus, distrito: 'fail' })
			errorsCount++
		}
		if (direccion === '') {
			setInputsStatus({ ...inputsStatus, direccion: 'fail' })
			errorsCount++
		}
		if (!politicaStatus) {
			setInputsStatus({ ...inputsStatus, politica: 'fail' })
			errorsCount++
		}
		if (errorsCount > 0) return false
		const propietario = {
			identificacion: numeroDeIdentificacion,
			genero: generoSeleccionado,
			nombre: nombre,
			apellido1: apellido1,
			apellido2: apellido2,
			correo: correo,
			telefono1: telefono1,
			telefono2: telefono2,
			provincia: provinciaSeleccionada,
			canton: cantonSeleccionado,
			distrito: distritoSeleccionado,
			direccion: direccion,
		}
		dispatch(setPropietario(propietario))
		return true
	}

	const getCantonByProvince = (province) => {
		return cantones.filter((canton) => canton.value === province)
	}
	const handleIdentificacionChange = (e) => {
		console.log(e.target.value)
		SetIdentificacionSelected(e.target.value)
	}
	const handleSearchCedula = async ({ target }) => {
		try {
			console.log(
				'onChange',
				identificacionSelected,
				target.value,
				numeroDeIdentificacion
			)
			let value = target.value

			//validate value has 9 digits
			if (value.length !== 9) return
			//validate value is a number
			if (isNaN(value)) return

			//validate value isnt equal to number of identificacion
			if (target.value === numeroDeIdentificacion) return

			const records = await searchCedula(value)
			if (records && records.length > 0) {
				const data = records[0]
				switch (data.genero) {
				case 'M':
					data.genero = 'Masculino'
					break
				case 'F':
					data.genero = 'Femenino'
					break
				case 'Femenino':
					data.genero = 'Femenino'
					break
				case 'Masculino':
					data.genero = 'Masculino'
					break
				default:
					data.genero = 'Sin especificar'
					break
				}
				setNumeroDeIdentificacion(value)
				setGeneroSeleccionado(data.genero)
				setNombre(data.nombre)
				setApellido1(data.apellido1)
				setApellido2(data.apellido2)
				setCorreo(data.correo)
				setTelefono1(data.telefono1)
				setTelefono2(data.telefono2)
				setProvinciaSeleccionada(data.provincia)
				setCantonSeleccionado(data.canton)
				setDistritoSeleccionado(data.distrito)
				setDireccion(data.direccion)

				console.log(data)
			} else {
				console.log('Cédula no encontrada')
			}
		} catch (error) {
			console.error(error)
		}
	}

	const cleanCedula = (cedula) => {
		// Remueve espacios y guiones medios
		return cedula.replace(/[\s-]/g, '')
	}

	const validateCedula = (cedula) => {
		// Expresión regular para validar que sean 9 dígitos numéricos
		const cedulaRegex = /^[0-9]{9}$/
		return cedulaRegex.test(cedula)
	}

	const searchCedula = async (cedula) => {
		const result = await fetch(
			`https://tse.medismart.info/api/persona/buscarCedula.php?user=sfconsult&password=8Rh8hcRFMyGmqimA&buscarCedula=${cedula}`
		)
		const { records } = await result.json()
		return records
	}
	const onPoliticaChange = (e) => {
		setPoliticaStatus(e.target.checked)
	}
	useEffect(() => {
		handleSearchCedula({ target: { value: numeroDeIdentificacion } })
	}, [identificacionSelected])
	useEffect(() => {
		setNumeroDeIdentificacion(propietario.identificacion)
		setNombre(propietario.nombre)
		setApellido1(propietario.apellido1)
		setApellido2(propietario.apellido2)
		setGeneroSeleccionado(propietario.genero)
		setCorreo(propietario.correo)
		setTelefono1(propietario.telefono1)
		setTelefono2(propietario.telefono2)
		setProvinciaSeleccionada(propietario.provincia)
		setCantonSeleccionado(propietario.canton)
		setDistritoSeleccionado(propietario.distrito)
		setDireccion(propietario.direccion)
	}, [propietario])
	useEffect(() => {
		setNombre(propietario.nombre)
		setApellido1(propietario.apellido1)
		setApellido2(propietario.apellido2)
		setGeneroSeleccionado(propietario.genero)
		setCorreo(propietario.correo)
		setTelefono1(propietario.telefono1)
		setTelefono2(propietario.telefono2)
		setProvinciaSeleccionada(propietario.provincia)
		setCantonSeleccionado(propietario.canton)
		setDistritoSeleccionado(propietario.distrito)
		setDireccion(propietario.direccion)
		SetIdentificacionSelected(propietario.tipoIdentificacion)
		setNumeroDeIdentificacion(propietario.numeroIdentificacion)
		setPoliticaDePrivacidad(propietario.politicaDePrivacidad)
	}, [propietario])
	useEffect(() => {
		setPoliticaDePrivacidad(politicaStatus)
	}, [politicaStatus])
	return (
		<Container portada={ImagePortada2}>
			<span></span>
			<div>
				<CMP044 title="Ingresá tus datos personales" />
			</div>

			<Row>
				<Select
					type="text"
					mandatory={true}
					label="Tipo de indentificación"
					placeholder="Seleccioná tipo de identificación"
					value={identificacionSelected}
					helperText="Identificacion incorrecta"
					onHandleChange={handleIdentificacionChange}
					options={tipoIdentificacion}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Número de indentificación"
					placeholder="ingresá tu identificación"
					helperText="Identificacion incorrecta"
					state={inputsStatus.numeroDeIdentificacion}
					setValue={setNumeroDeIdentificacion}
					value={numeroDeIdentificacion}
					onHandleChange={handleSearchCedula}
				/>
			</Row>
			<Row>
				<Select
					type="text"
					mandatory={false}
					label="Género"
					placeholder="Seleccióna tipo de género"
					value={generoSeleccionado}
					state={inputsStatus.genero}
					onHandleChange={(e) => setGeneroSeleccionado(e.target.value)}
					options={generos}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Nombre"
					placeholder="Ingresá tu nombre"
					value={nombre}
					disabled={true}
					state={inputsStatus.nombre}
				/>
				<Input
					type="text"
					mandatory={true}
					label="Primer Apellido"
					placeholder="Ingresá tu primer apellido"
					value={apellido1}
					disabled={true}
					state={inputsStatus.apellido1}
				/>
				<Input
					type="text"
					mandatory={true}
					label="Segundo Apellido"
					placeholder="Ingresá tu primer apellido"
					value={apellido2}
					disabled={true}
					state={inputsStatus.apellido2}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Correo electrónico"
					placeholder="Ingresá tu correo electrónico"
					value={correo}
					setValue={setCorreo}
					state={inputsStatus.correo}
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
				<Select
					type="text"
					mandatory={false}
					label="Provincia"
					placeholder="Seleccioná la provincia"
					options={provinciasCostarica}
				/>
				<Select
					type="text"
					mandatory={false}
					label="Cantón"
					placeholder="Seleccioná el cantón"
					options={cantonesCostarica}
				/>
				<Select
					type="text"
					mandatory={false}
					label="Distrito"
					placeholder="Seleccioná el distrito"
					options={districtCostarica}
				/>
			</Row>
			<Row>
				<CMP040
					label="Dirección exacta"
					value={direccion}
					setValue={setDireccion}
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
				<PoliticaCheckbox value={politicaStatus} state={setPoliticaStatus} onHandleChange={onPoliticaChange} />
			</Row>
			<Row>
				<Button
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<Button
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

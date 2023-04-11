/**
 * @file Contenedor_datos_personales.jsx
 * @description Contenedor de datos personales.
 * @componentNumber CMP011
 */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterSelect from '../common/FilterSelect'
import Select from '../common/Select'
import ContenedoresHeader from '../common/ContenedoresHeader'
import PlanOnco from '../home/PlanOnco'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
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
	tipoIdentificaciones,
	generos,
	provinciasCostarica,
	cantonesCostarica,
	districtCostarica,
	regex,
} from '@/constants/constants'
const Contenedor_datos_personales = () => {
	const dispatch = useDispatch()
	const { goTo, updateStepStatus } = usePage()
	const { fetchData } = useFetch()
	const { propietario } = useSelector((state) => state.afiliacion)

	const [isInputDisabled, setIsInputDisabled] = useState(false)

	const [tipoIdentificacion, setTipoIdentificacion] = useState({
		value: 0,
		status: '',
		mandatory: true,
		regex: regex.onlyNumbers,
	}) //estado del tipo de identificacion
	const [numeroIdentificacion, setNumeroIdentificacion] = useState({
		value: '',
		status: '',
		mandatory: true,
		regex: regex.identification,
	}) //estado del numero de identificacion
	const [genero, setGenero] = useState({
		value: 0,
		status: '',
		mandatory: true,
		regex: regex.onlyNumbers,
	}) //estado del genero
	const [nombre, setNombre] = useState({
		value: '',
		status: '',
		mandatory: true,
		regex: regex.names,
	}) //estado del nombre
	const [apellido1, setApellido1] = useState({
		value: '',
		status: '',
		mandatory: true,
		regex: regex.names,
	}) //estado del primer apellido
	const [apellido2, setApellido2] = useState({
		value: '',
		status: '',
		mandatory: true,
		regex: regex.names,
	}) //estado del segundo apellido
	const [correoElectronico, setCorreoElectronico] = useState({
		value: '',
		status: '',
		mandatory: true,
		regex: regex.email,
	}) //estado del correo electronico
	const [telefono1, setTelefono1] = useState({
		value: '',
		status: '',
		mandatory: true,
		code: '+506',
		regex: regex.phone,
	}) //estado del telefono
	const [telefono2, setTelefono2] = useState({
		value: '',
		code: '+506',
		status: '',
		mandatory: false,
		regex: regex.phone,
	}) //estado del telefono
	const [provincia, setProvincia] = useState({
		value: 0,
		status: '',
		mandatory: true,
		regex: regex.onlyNumbers,
	}) //estado de la provincia
	const [canton, setCanton] = useState({
		value: 0,
		status: '',
		mandatory: true,
		regex: regex.onlyNumbers,
	}) //estado del canton
	const [distrito, setDistrito] = useState({
		value: 0,
		status: '',
		mandatory: true,
		regex: regex.onlyNumbers,
	}) //estado del distrito
	const [direccionExacta, setDireccionExacta] = useState({
		value: '',
		status: '',
		mandatory: false,
		regex: regex.address,
	}) //estado de la direccion exacta
	const [politicaStatus, setPoliticaStatus] = useState(false) //estado de la politica de privacidad
	const [cantonOptions, setCantonOptions] = useState([]) //estado de los cantones
	const [distritoOptions, setDistritoOptions] = useState([]) //estado de los distritos
	const handleClickLast = () => {
		const url = '/'
		goTo(url, () => {
			dispatch(setCurrentIndex(1))
			updateStepStatus(url) //set the current step as active
		})
	}

	const handleClickNext = async () => {
		const url = '/beneficiarios'
		await validateData(true)
		let data = await validateData()
		if (data) {
			console.log({ info: data })
			dispatch(setPropietarioInfo({ ...data }))
			goTo(url, () => {
				dispatch(setCurrentIndex(2))
				updateStepStatus(2, url, false) //set the current step as active
			})
		} else {
			console.log('error')
		}
	}
	const validateData = (init = false) => {
		if (init) {
		
			setTipoIdentificacion({
				...tipoIdentificacion,
				status: regex.onlyNumbers.test(tipoIdentificacion.value)
					? 'success'
					: tipoIdentificacion.mandatory
						? 'fail'
						: 'N/A',
			})
			setNumeroIdentificacion({
				...numeroIdentificacion,
				status: regex.identification.test(numeroIdentificacion.value)
					? 'success'
					: numeroIdentificacion.mandatory
						? 'fail'
						: 'N/A',
			})
			setNombre({
				...nombre,
				status: regex.names.test(nombre.value)
					? 'success'
					: nombre.mandatory
						? 'fail'
						: 'N/A',
			})
			setApellido1({
				...apellido1,
				status: regex.names.test(apellido1.value)
					? 'success'
					: apellido1.mandatory
						? 'fail'
						: 'N/A',
			})
			setApellido2({
				...apellido2,
				status: regex.names.test(apellido2.value)
					? 'success'
					: apellido2.mandatory
						? 'fail'
						: 'N/A',
			})
			setCorreoElectronico({
				...correoElectronico,
				status: regex.email.test(correoElectronico.value)
					? 'success'
					: correoElectronico.mandatory
						? 'fail'
						: 'N/A',
			})
			setTelefono1({
				...telefono1,
				status: regex.phone.test(telefono1.value)
					? 'success'
					: telefono1.mandatory
						? 'fail'
						: 'N/A',
			})
			setTelefono2({
				...telefono2,
				status: regex.phone.test(telefono2.value)
					? 'success'
					: telefono2.mandatory
						? 'fail'
						: 'N/A',
			})
			setDireccionExacta({
				...direccionExacta,
				status: regex.address.test(direccionExacta.value)
					? 'success'
					: direccionExacta.mandatory
						? 'fail'
						: 'N/A',
			})
			setGenero({
				...genero,
				status:
          genero.value != 0 ? 'success' : genero.mandatory ? 'fail' : 'N/A',
			})
			setProvincia({
				...provincia,
				status:
          provincia.value != 0 || provincia.value != undefined
          	? 'success'
          	: provincia.mandatory
          		? 'fail'
          		: 'N/A',
			})
			setCanton({
				...canton,
				status:
          canton.value != 0 || canton.value != undefined
          	? 'success'
          	: canton.mandatory
          		? 'fail'
          		: 'N/A',
			})
			setDistrito({
				...distrito,
				status:
          distrito.value != 0 || distrito.value != undefined
          	? 'success'
          	: distrito.mandatory
          		? 'fail'
          		: 'N/A',
			})

			return
		}
		if (telefono2.value === '') setTelefono2({ ...telefono2, status: 'N/A' })
		const inputs = {
			numeroIdentificacion,
			nombre,
			apellido1,
			apellido2,
			correoElectronico,
			telefono1,
			telefono2,
			direccionExacta,
		}
		const selects = {
			tipoIdentificacion,
			genero,
			provincia,
			canton,
			distrito,
		}

		console.log({ inputs, selects })
		//iterar sobre los estados de los inputs y verifica que todos esten success o none
		const isValidInputs = Object.values(inputs).every(
			(input) => input.status === 'success' || input.status === 'N/A'
		)
		const isValidSelects = Object.values(selects).every(
			(select) => select.status === 'success' || select.status === 'N/A'
		)
		console.log(isValidInputs, isValidSelects)
		if (isValidInputs && isValidSelects) {
			return {
				tipoIdentificacion: tipoIdentificacion.value,
				numeroIdentificacion: numeroIdentificacion.value,
				genero: genero.value,
				nombre: nombre.value,
				apellido1: apellido1.value,
				apellido2: apellido2.value,
				correo: correoElectronico.value,
				telefono1: telefono1.value.replace(' ', ''),
				telefono2: telefono2.value.replace(' ', ''),
				phoneCode1: telefono1.code,
				phoneCode2: telefono2.code,
				provincia: provincia.value,
				canton: canton.value,
				distrito: distrito.value,
				direccion: direccionExacta.value,
			}
		} else {
			return false
		}
	}
	const handleProviceChange = ({ target }) => {
		setProvincia({ value: target.value, status: 'success' })
		const cantonOptions = cantonesCostarica.filter(
			(canton) => canton.id === Number(target.value)
		)
		setCantonOptions(cantonOptions)
		setCanton({ value: 0, status: 'none' })
		setDistrito({ value: 0, status: 'none' })
	}
	const handleCantonChange = ({ target }) => {
		setCanton({ value: target.value, status: 'success' })
		const distritoOptions = districtCostarica.filter(
			(distrito) => distrito.id === Number(provincia.value + target.value)
		)
		setDistritoOptions(distritoOptions)
		setDistrito({ value: 0, status: 'none' })
	}
	const searchIdentification = async (e) => {
		const { value } = e.target
		const tipoIdentificacionValue = Number(tipoIdentificacion.value)
		const isTipoIdentificacionOne = tipoIdentificacionValue === 1
		const isSameLastValue = value === numeroIdentificacion.value
		if (
			!isTipoIdentificacionOne ||
      isSameLastValue ||
      !regex.identification.test(value)
		)
			return
		console.log({ isTipoIdentificacionOne, isSameLastValue })

		const url = `https://tse.medismart.info/api/persona/buscarCedula.php?user=sfconsult&password=8Rh8hcRFMyGmqimA&buscarCedula=${value}`

		try {
			const response = await fetch(url)
			const { records } = await response.json()
			const { nombre, apellido1, apellido2, genero } = records[0]
			console.log('FETCH')
			setNombre({ ...nombre, value: nombre, status: 'success' })
			setApellido1({ ...apellido1, value: apellido1, status: 'success' })
			setApellido2({ ...apellido2, value: apellido2, status: 'success' })

			if (genero.toLowerCase() === 'femenino' || genero.toLowerCase() === 'f') {
				setGenero({ ...genero, value: 'F', status: 'success' })
			} else if (
				genero.toLowerCase() === 'masculino' ||
        genero.toLowerCase() === 'm'
			) {
				setGenero({ ...genero, value: 'M', status: 'success' })
			} else {
				setGenero({ ...genero, value: 0, status: 'fail' })
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		// dispatch(
		// 	setPropietarioInfo({
		// 		...propietario,
		// 		tipoIdentificacion: tipoIdentificacion.value,
		// 	})
		// )
		if (tipoIdentificacion.value == 1 || tipoIdentificacion.value == 0) {
			// setNombre({ ...nombre, value: '', status: 'none' })
			// setApellido1({ ...apellido1, value: '', status: 'none' })
			// setApellido2({ ...apellido2, value: '', status: 'none' })
			setIsInputDisabled(true)
		} else {
			setIsInputDisabled(false)
		}
	}, [tipoIdentificacion])
	useEffect(() => {
		//set all state using the propietario info
		setTipoIdentificacion({
			...tipoIdentificacion,
			value: propietario.tipoIdentificacion,
		})
		setNumeroIdentificacion({
			...numeroIdentificacion,
			value: propietario.numeroIdentificacion,
		})
		setGenero({ ...genero, value: propietario.genero })
		setNombre({ ...nombre, value: propietario.nombre })
		setTipoIdentificacion({
			...tipoIdentificacion,
			value: propietario.tipoIdentificacion,
		})
		setApellido1({
			...apellido1,
			value: propietario.apellido1,
		})
		setApellido2({
			...apellido2,
			value: propietario.apellido2,
		})
		setCorreoElectronico({
			...correoElectronico,
			value: propietario.correo,
		})
		setTelefono1({
			...telefono1,
			value: propietario.telefono1,
		})
		setTelefono2({
			...telefono2,
			value: propietario.telefono2,
		})
		setProvincia({
			...provincia,
			value: propietario.provincia,
		})
		setCanton({ ...canton, value: propietario.canton, status: 'success' })
		setDistrito({
			...distrito,
			value: propietario.distrito,
		})
		setDireccionExacta({
			...direccionExacta,
			value: propietario.direccion,
		})
		if (
			propietario.tipoIdentificacion > 0 ||
      propietario.tipoIdentificacion == ''
		) {
			console.log({ propietario })
		}
	}, [])

	return (
		<Container portada={ImagePortada2}>
			<span></span>
			<div>
				<ContenedoresHeader title="Ingresá tus datos personales" />
			</div>

			<Row>
				<Select
					type="text"
					mandatory={true}
					label="Tipo de indentificación"
					placeholder="Seleccioná tipo de identificación"
					helperText="Identificacion incorrecta"
					options={tipoIdentificaciones}
					value={tipoIdentificacion}
					status={tipoIdentificacion.status}
					setState={setTipoIdentificacion}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					disabled={tipoIdentificacion.value === 0}
					mandatory={true}
					label="Número de indentificación"
					placeholder="ingresá tu identificación"
					helperText="Identificacion incorrecta"
					onHandleChange={searchIdentification}
					onHandleBlur={searchIdentification}
					value={numeroIdentificacion}
					setValue={setNumeroIdentificacion}
					status={numeroIdentificacion.status}
					regex={regex.identification}
				/>
			</Row>
			<Row>
				<Select
					mandatory={false}
					label="Género"
					placeholder="Seleccióna tipo de género"
					options={generos}
					value={genero}
					status={genero.status}
					setState={setGenero}
					regex={regex.names}
				/>
			</Row>
			<Row>
				<Input
					type="text"
					mandatory={true}
					label="Nombre"
					placeholder="Ingresá tu nombre"
					disabled={isInputDisabled}
					helperText="El nombre no puede estar vacío y debe contener solo letras"
					value={nombre}
					setValue={setNombre}
					status={nombre.status}
					regex={regex.names}
				/>
				<Input
					type="text"
					mandatory={true}
					label="Primer Apellido"
					placeholder="Ingresá tu primer apellido"
					helperText="El apellido debe contener solo letras y no debe contener espacios en blanco"
					disabled={isInputDisabled}
					value={apellido1}
					setValue={setApellido1}
					status={apellido1.status}
					regex={regex.names}
				/>
				<Input
					type="text"
					mandatory={true}
					label="Segundo Apellido"
					placeholder="Ingresá tu primer apellido"
					helperText="El apellido debe contener solo letras y no debe contener espacios en blanco"
					disabled={isInputDisabled}
					value={apellido2}
					setValue={setApellido2}
					status={apellido2.status}
					regex={regex.names}
				/>
			</Row>
			<Row>
				<Input
					type="email"
					mandatory={true}
					label="Correo electrónico"
					placeholder="Ingresá tu correo electrónico"
					helperText="Correo electrónico incorrecto"
					value={correoElectronico}
					setValue={setCorreoElectronico}
					status={correoElectronico.status}
					regex={regex.email}
				/>
			</Row>

			<Row>
				<FilterSelect
					mandatory={true}
					block={true}
					status={telefono1.status}
					regex={regex.phone}
					setValue={setTelefono1}
					value={telefono1}
					helperText="El formato del teléfono no es correcto."
				/>
				<FilterSelect
					status={telefono2.status}
					regex={regex.phone}
					setValue={setTelefono2}
					value={telefono2}
					helperText="El formato del teléfono no es correcto."
				/>
			</Row>
			<Row bottom={32}>
				<h2>Datos de residencia</h2>
			</Row>
			<Row>
				<Select
					type="text"
					mandatory={true}
					label="Provincia"
					placeholder="Seleccioná la provincia"
					options={provinciasCostarica}
					value={provincia}
					status={provincia.status}
					setState={setProvincia}
					onHandleChange={handleProviceChange}
				/>
				<Select
					type="text"
					mandatory={true}
					label="Cantón"
					placeholder="Seleccioná el cantón"
					options={cantonOptions}
					value={canton}
					status={canton.status}
					setState={setCanton}
					onHandleChange={handleCantonChange}
				/>
				<Select
					type="text"
					mandatory={true}
					label="Distrito"
					placeholder="Seleccioná el distrito"
					options={distritoOptions}
					value={distrito}
					status={distrito.status}
					setState={setDistrito}
				/>
			</Row>
			<Row>
				<TextArea
					label="Dirección exacta"
					placeholder="Ingresá tu dirección de domicilio"
					helperText="La dirección no puede estar vacía"
					value={direccionExacta}
					setValue={setDireccionExacta}
					status={direccionExacta.status}
					regex={regex.address}
				/>
			</Row>
			<Row bottom={32}>
				<h2>Planes adicionales</h2>
			</Row>
			<Row>
				<PlanOnco />
			</Row>
			<Row>
				<PoliticaCheckbox value={politicaStatus} state={setPoliticaStatus} />
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
const datos_personales = React.memo(Contenedor_datos_personales)
export default datos_personales
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

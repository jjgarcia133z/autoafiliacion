import { createSlice } from '@reduxjs/toolkit'

export const afiliacionSlice = createSlice({
	name: 'afiliacion',
	initialState: {
		tipoPlan: 0,
		politicadePrivacidad: false,
		propietario: {
			tipoIdentificacion: '',
			numeroIdentificacion: '',
			genero: '',
			nombre: '',
			apellido1: '',
			apellido2: '',
			correo: '',
			telefono1: '',
			telefono2: '',
			phoneCode1: '',
			phoneCode2: '',
			provincia: '',
			canton: '',
			distrito: '',
			direccion: '',
		},
		beneficiarios: [],
		mascotas: [
			{
				tipoMascota: 'Perro',
				nombre: 'Firulais',
				color: '',
				raza: '',
				fechaNacimiento: '',
				edad: '',
				sexo: '',
			},
			{
				tipoMascota: 'Gato',
				nombre: 'Pelusa',
				color: '',
				raza: '',
				fechaNacimiento: '',
				edad: '',
				sexo: '',
			},
		],
		productosAdicionales: [
			{
				nombre: 'test producto 1',
				beneficiario: 'test beneficiario 1',
			},
			{
				nombre: 'test producto 2',
				beneficiario: 'test beneficiario 2',
			},
		],
		cupon: '',
	},
	reducers: {
		setCurrentIndex: (state, action) => {
			state.currentIndex = action.payload
		},
		setWelcomeModal: (state, action) => {
			state.welcomeModal = action.payload
		},
		setTipoPlan: (state, action) => {
			state.tipoPlan = action.payload
		},
		setPropietarioInfo: (state, action) => {
			console.log('action.payload', action.payload)
			state.propietario = action.payload
		},
		setBeneficiarios: (state, action) => {
			//add new beneficiario to array of beneficiarios
			state.beneficiarios.push(action.payload)
		},
		setMascotas: (state, action) => {
			//add new mascota to array of mascotas
			state.mascotas.push(action.payload)
		},
		setPoliticaDePrivacidad: (state, action) => {
			state.politicadePrivacidad = action.payload
		},

	},
})

export const { setCurrentIndex, setWelcomeModal, setTipoPlan, setPropietarioInfo, setBeneficiarios, setPoliticaDePrivacidad } =
  afiliacionSlice.actions

export default afiliacionSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const afiliacionSlice = createSlice({
	name: 'afiliacion',
	initialState: {
		tipoPlan: 1,
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
			provincia: '',
			canton: '',
			distrito: '',
			direccion: '',
		},
		beneficiarios: [
			{
				tipoIdentificacion: '',
				numeroIdentificacion: '',
				genero: '',
				parentesco: '',
				nombre: '',
				apellido1: '',
				apellido2: '',
				correo: '',
				telefono1: '',
				telefono2: '',
				provincia: '',
				canton: '',
				distrito: '',
				direccion: '',
			},
			{
				tipoIdentificacion: '',
				numeroIdentificacion: '',
				genero: '',
				parentesco: 'hija',
				nombre: 'test beneficiario 2',
				primerApellido: '',
				segundoApellido: '',
				correo: '',
				telefono: '',
				otroTelefono: '',
				provincia: '',
				canton: '',
				distrito: '',
				direccion: '',
			},
		],
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
	},
})

export const { setCurrentIndex, setWelcomeModal, setTipoPlan } =
  afiliacionSlice.actions

export default afiliacionSlice.reducer

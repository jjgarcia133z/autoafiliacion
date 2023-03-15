import { createSlice } from '@reduxjs/toolkit'

export const afiliacionSlice = createSlice({
	name: 'afiliacion',
	initialState: {
		tipoPlan: 'mensual',
		planMedismart: {
			tipoIdentificacion: '',
			numeroIdentificacion: '',
			genero: '',
			nombre: 'Marcel de mercevil lopez rojas mora',
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
		beneficiarios: [
			{
				tipoIdentificacion: '',
				numeroIdentificacion: '',
				genero: '',
				parentesco: 'hijo',
				nombre: 'test beneficiario 1',
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
	},
})

export const { setCurrentIndex, setWelcomeModal } = afiliacionSlice.actions

export default afiliacionSlice.reducer

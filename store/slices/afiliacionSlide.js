import { createSlice } from '@reduxjs/toolkit'

export const afiliacionSlice = createSlice({
	name: 'afiliacion',
	initialState: {
		tipoPlan: 'mensual',
		planMedismart: {
			tipoIdentificacion: '',
			numeroIdentificacion: '',
			genero: '',
			nombre: '',
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
				parentesco: '',
				nombre: '',
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
		mascotas: {},
		productosAdicionales: {},
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

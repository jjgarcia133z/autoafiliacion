import { createSlice } from '@reduxjs/toolkit'
import { state } from '@/constants/constants'
export const config = createSlice({
	name: 'config',
	initialState: {
		welcomeModal: true,
		privacyPolicy : false,
		currentIndex: 1,
		steps: [
			{
				title: 'Tipo Plan',
				status: state.active,
			},
			{
				title: 'Datos Personales',
				status: state.disable,
			},
			{
				title: 'Agregar Beneficiarios',
				status: state.disable,
			},
			{
				title: 'Resumen',
				status: state.disable,
			},
			{
				title: 'Metodo de Pago',
				status: state.disable,
			},
			{
				title: 'Datos de tu cuenta',
				status: state.disable,
			},
		],

		pages: [
			{
				id: 1,
				url: '/',
			},
			{
				id: 2,
				url: '/datos-personales',
			},
			{
				id: 3,
				url: '/beneficiarios',
			},
			{
				id: 4,
				url: '/agregar-beneficiario',
			},
			{
				id: 5,
				url: '/agregar-mascota',
			},
		],
	},
	reducers: {
		setCurrentIndex: (state, action) => {
			state.currentIndex = action.payload
		},
		setStatus: (state, action) => {
			state.steps[action.payload.index].status = action.payload.status
		},
		setWelcomeModal: (state, action) => {
			state.welcomeModal = action.payload
		},
	},
})

export const { setCurrentIndex, setStatus, setWelcomeModal } = config.actions

export default config.reducer

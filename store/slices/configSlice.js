import { createSlice } from '@reduxjs/toolkit'
import { state } from '@/constants/constants'
export const config = createSlice({
	name: 'config',
	initialState: {
		welcomeModal: true,
		privacyPolicy: false,
		currentIndex: 1,
		steps: [
			{
				title: 'Tipo Plan',
				status: state.active,
				ready: false,
				url: '/',
			},
			{
				title: 'Datos Personales',
				status: state.disable,
				ready: false,
				url: '/datos-personales',
			},
			{
				title: 'Agregar Beneficiarios',
				status: state.disable,
				ready: false,
				url: '/beneficiarios',
			},
			{
				title: 'Resumen',
				status: state.disable,
				ready: false,
				url: '/resumen',
			},
			{
				title: 'Metodo de Pago',
				status: state.disable,
				ready: false,
				url: '/metodo-pago',
			},
			{
				title: 'Datos de tu cuenta',
				status: state.disable,
				ready: false,
				url: '/datos-cuenta',
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
		setStepsStatus: (state, action) => {
			state.steps = action.payload
		},
		setStatusReady: (state, action) => {
			const step = state.steps.find((step) => step.url === action.payload)
			step.ready = true
		},
		setWelcomeModal: (state, action) => {
			state.welcomeModal = action.payload
		},
	},
})

export const {
	setCurrentIndex,
	setStepsStatus,
	setStatusReady,
	setWelcomeModal,
} = config.actions

export default config.reducer

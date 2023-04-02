import { createSlice } from '@reduxjs/toolkit'
import { state } from '@/constants/constants'
export const config = createSlice({
	name: 'config',
	initialState: {
		welcomeModal: true,
		privacyPolicy: false,
		currentIndex: 0,
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

	},
	reducers: {
		setCurrentIndex: (state, action) => {
			state.currentIndex = action.payload
		},
		setStepsStatus: (state, action) => {
			console.log(action.payload)
			const { index, status } = action.payload
			state.steps[index].status = status
		},
		setStatusReady: (state, action) => {
			const index = action.payload
			state.steps[index].ready = true

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

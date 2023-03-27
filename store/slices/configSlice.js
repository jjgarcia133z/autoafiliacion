import { createSlice } from '@reduxjs/toolkit'
import { state } from '@/constants/constants'
export const config = createSlice({
	name: 'config',
	initialState: {
		welcomeModal: true,
		currentIndex: 1,
		steps: [
			{
				id: 1,
				title: 'Tipo Plan',
				status: state.active,
			},
			{
				id: 2,
				title: 'Datos Personales',
				status: state.disable,
			},
			{
				id: 3,
				title: 'Agregar Beneficiarios',
				status: state.disable,
			},
			{
				id: 4,
				title: 'Resumen',
				status: state.disable,
			},
			{
				id: 5,
				title: 'Metodo de Pago',
				status: state.disable,
			},
			{
				id: 6,
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
				url: '/agregar-beneficiarios',
			},
			{
				id: 4,
				url: '/agregar-mascota',
			},
		],
	},
	reducers: {
		setCurrentIndex: (state, action) => {
			state.currentIndex = action.payload
		},
		setStatus: (state, action) => {
			state.steps[action.payload].status = state.active
		},
		setWelcomeModal: (state, action) => {
			state.welcomeModal = action.payload
		},
	},
})

export const { setCurrentIndex, setStatus, setWelcomeModal } = config.actions

export default config.reducer

import { createSlice } from '@reduxjs/toolkit'

export const config = createSlice({
	name: 'config',
	initialState: {
		welcomeModal: true,
		currentIndex: 1,
		pages: [
			{
				id: 1,
				name: 'plan',
				title: 'Tipo Plan',
				url: '/',
			},
			{
				id: 2,
				name: 'datos-personales',
				title: 'Datos Personales',
				url: '/datos-personales',
			},
			{
				id: 3,
				name: 'agregar-beneficiarios',
				title: 'Agregar Beneficiarios',
				url: '/agregar-beneficiarios',
			},
		],
	},
	reducers: {
		setCurrentIndex: (state, action) => {
			state.currentIndex = action.payload
		},
		setWelcomeModal: (state, action) => {
			state.welcomeModal = action.payload
		}

	},
})

export const { setCurrentIndex, setWelcomeModal } = config.actions

export default config.reducer

import { createSlice } from '@reduxjs/toolkit'

export const persistSlice = createSlice({
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

export const { setCurrentIndex, setWelcomeModal } = persistSlice.actions

export default persistSlice.reducer

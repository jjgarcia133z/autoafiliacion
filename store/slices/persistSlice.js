import { createSlice } from '@reduxjs/toolkit'

export const persistSlice = createSlice({
	name: 'persistDB',
	initialState: {
		name: 'pablo',
		email: '',
		isLoggedIn: false,
		year: 2023,
	},
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name
			state.email = action.payload.email
			state.isLoggedIn = true
		},
		logoutUser: (state) => {
			state.name = ''
			state.email = ''
			state.isLoggedIn = false
		},
	},
})

export const { setUser, logoutUser } = persistSlice.actions

export default persistSlice.reducer
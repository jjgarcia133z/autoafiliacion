import { createSlice } from '@reduxjs/toolkit'

const autoafiliacionSlice = createSlice({
	name: 'autoafiliacion',
	initialState: {
		user: {
			id: 0,
			nombre: 'TEST',
			apellido: '',
			email: ''
		},
		autoafiliacionList: [],
		autoafiliacionListLoading: false,
	},
	reducers: {
		// make reducers
		getAutoafiliacionList: (state) => {
			state.autoafiliacionListLoading = true
		}
	}
})

// make actions
export const {
	getAutoafiliacionList,
} = autoafiliacionSlice.actions

// make reducer
export default autoafiliacionSlice.reducer



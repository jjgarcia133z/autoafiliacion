//make slice storageSlice.js

import { createSlice } from '@reduxjs/toolkit'

export const storage = createSlice({
	name: 'storage',
	initialState: {
		flagData: [],
	},
	reducers: {
		setFlags: (state, action) => {
			// console.log(object);
			state.flagData = action.payload
		},
	},
})

export const { setFlags } = storage.actions

export default storage.reducer

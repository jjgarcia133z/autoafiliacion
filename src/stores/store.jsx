import { configureStore } from '@reduxjs/toolkit'
import autoAfiliacionSlice from './slices/autoafiliacionSlice'

export const store = configureStore({
	reducer: {
		autoAfiliacion: autoAfiliacionSlice,
	},
})

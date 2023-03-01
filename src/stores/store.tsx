import { configureStore } from '@reduxjs/toolkit'
import autoAfiliacionSlice from './slices/autoafiliacionSlice'
// ...
const store = configureStore({
	reducer: {
		autoAfiliacion: autoAfiliacionSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>

export default store


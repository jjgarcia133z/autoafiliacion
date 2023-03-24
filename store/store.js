import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import config from './slices/configSlice.js'
import afiliacion from './slices/afiliacionSlice.js'
import storage from './slices/storageSlice.js'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
	key: 'root',
	storage: storageSession,
	blacklist: ['afiliacion'],
}
const reducers = combineReducers({
	config: config,
	afiliacion: afiliacion,
	storage: storage,
})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
})

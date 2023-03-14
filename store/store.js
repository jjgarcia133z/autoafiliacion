import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import config from './slices/configSlide.js'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
	key: 'root',
	storage: storageSession,
	expires: 10000,
}
const reducers = combineReducers({
	config: config,
})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
})

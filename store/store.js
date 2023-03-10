import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import persistDB from './slices/persistSlice.js'

const persistConfig = {
	key: 'root',
	storage,
}
const reducers = combineReducers({
	persistDB: persistDB,
})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
})

import { Provider } from 'react-redux'
import { store } from '@/store/store'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import '@/styles/globals.css'

let persistor = persistStore(store)
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}

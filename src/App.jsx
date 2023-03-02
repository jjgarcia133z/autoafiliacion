import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Main from './pages/Main'

function App() {

	return (
		<>
			<BrowserRouter> {/* contexto de rutas */}
				<Routes> {/* contenedor de las rutas */}

					<Route path="/pepito" element={<Layout />}>
						<Route index element={<Main />} />
						<Route path='datospersonales' element={<Main />} />
					</Route>
          
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

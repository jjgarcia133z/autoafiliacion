import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Main from './pages/Main'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Main />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

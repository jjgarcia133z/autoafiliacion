import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector } from 'react-redux/es/exports'
import { RootState } from './stores/store'

interface User {
  nombre: string,
  telefono: string,
  edad: number,
}

function App() {
	const [count, setCount] = useState(0)
	const userState = useSelector((state: RootState) => state.autoAfiliacion)
	const { user } = userState

	const handleCount = ()=>{
		setCount((a) => a + 2)
	}

	const usuario: User = {
		nombre: 'Juan',
		telefono: '123456789',
		edad: 20,
	}

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + {user.nombre}</h1>
			<div className="card">
				<button onClick={handleCount}>
          count is {count}
				</button>
				<p>
          Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
        Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
	const autoAfiliacionName = useSelector(state => state.autoAfiliacion.name)
	return (
		<div>{ autoAfiliacionName }</div>
	)
}

export default Main
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../stores/slices/autoafiliacionSlice'

const Main = () => {
	const autoAfiliacionName = useSelector(state => state.autoAfiliacion.name)
	const dispatch = useDispatch()

	dispatch(increment)
	return (
		<div>{ autoAfiliacionName }</div>
	)
}

export default Main
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
	setStepsStatus,
	setCurrentIndex,
	setStatusReady,
} from '@/store/slices/configSlice'
import { state } from '@/constants/constants'
import { current } from '@reduxjs/toolkit'

const usePage = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const { steps, currentIndex } = useSelector((state) => state.config)
	/**
   * @param {string} page  - url to go
   * @param {function} func - function to execute before go to page
   * @returns
   */
	const goTo = (page, func = null) => {
		if (func) {
			func() //execute function before go to page
		}
		router.push(page)
	}
	/**
	 * 
	 * @param {*} index  - index del paso a actualizar
	 * @param {*} url  - url a la que se va a ir
	 * @param {*} step  - si es true se actualiza por paso, si es false se actualiza por boton
	 */
	const updateStepStatus = (index, url, step = false) => {
		if (step) {
			updateByStep(index, url)
		}
		if (!step) {
			updateByButton(index, url)
		}
	}
	const updateByButton = (index, url) => {
		//Se pasa al siguiente paso si existe el index es igual o menor a step lenght - 1, el anterior paso pasa a ser success y el siguiente paso pasa a ser current y active
		if (index <= steps.length - 1) {
			steps.forEach((step, i) => {
				if (step.status === state.successActive) {
					dispatch(setStepsStatus({ index: i, status: state.success }))
				}
			})
			//si ready es true, solo se cambia el index
			if (steps[index].ready) {
				dispatch(setCurrentIndex(index))
				dispatch(setStepsStatus({ index, status: state.successActive }))

			} else {
				//si ready es false, se cambia el index y el status
				console.log({ msg: 'Ready False', index, status: steps[index].ready })
				dispatch(setStatusReady(index - 1))
				dispatch(setStepsStatus({ index: index - 1, status: state.success }))
				dispatch(setStepsStatus({ index, status: state.active }))
				dispatch(setCurrentIndex(index))
			}
			goTo(url)
		}
	}
	const updateByStep = (index, url) => {
		const currentStep = steps[index].status
		//si el status del paso del index es disable no hace nada
		if (currentStep === state.disable) return
		//itera y pasa todos los que digan successActive a success
		steps.forEach((step, i) => {
			if (step.status === state.successActive && i !== index) {
				dispatch(setStepsStatus({ index: i, status: state.success }))
			}
			if (step.status === state.active && i !== index) {
				dispatch(setStepsStatus({ index: i, status: state.activeUnselected }))
			}
		})
		if (steps[index].status === state.success) {
			//si el paso actual es success, pasa a ser successActive
			dispatch(setStepsStatus({ index, status: state.successActive }))
			dispatch(setCurrentIndex(index))
		}
		if (steps[index].status === state.active) {
			//si el paso actual es active, pasa a ser current
			dispatch(setStepsStatus({ index, status: state.active }))
			dispatch(setCurrentIndex(index))
		}
		if (steps[index].status === state.activeUnselected) {
			//si el paso actual es activeUnselected, pasa a ser current
			dispatch(setStepsStatus({ index, status: state.active }))
			dispatch(setCurrentIndex(index))
		}
		dispatch(setCurrentIndex(index))
		goTo(url)
	}
	return {
		goTo,
		updateStepStatus,
	}
}

export default usePage

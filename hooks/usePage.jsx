import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setStepsStatus } from '@/store/slices/configSlice'
import { state } from '@/constants/constants'
const usePage = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const steps = useSelector((state) => state.config.steps)
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
	const updateStepStatus = (url) => {
		const newSteps = steps.map((step, index) => {
			/**
       * crea un switch para cambiar el estado de los steps segun si el estado anterior y activa el nuevo
       * si la url es igual al step actual, cambia el estado a active, pero si el estado anterior es success, cambia el estado a successActive
       * si el estado anterior es disable, no cambia el estado a excepcion que la url sea igual al step actual
       */
			switch (step.status) {
			case state.active:
				if (step.url === url && step.ready) {
					return { ...step, status: state.successActive }
				} else {
					return { ...step, status: state.success }
				}
			case state.successActive:
				if (step.url === url && step.ready) {
					return { ...step, status: state.successActive }
				} else {
					return { ...step, status: state.success }
				}
			case state.success:
				if (step.url === url && step.ready) {
					return { ...step, status: state.active }
				} else {
					return { ...step, status: state.success }
				}
			case state.disable:
				if (step.url === url && step.ready) {
					return { ...step, status: state.active }
				} else {
					return { ...step, status: state.disable }
				}
			default:
				return { ...step, status: state.disable }
			}

		})

		dispatch(setStepsStatus(newSteps))
	}

	return {
		goTo,
		updateStepStatus,
	}
}

export default usePage

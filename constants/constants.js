const state = {
	active: 'active',
	activeUnselected: 'activeUnselected',
	disable: 'disable',
	success: 'success',
	successActive: 'successActive',
}

const stateCss = {
	active: {
		background: 'var(--primary-blue-primary-blue-900)',
		border: '2px solid var(--secundary-accent-secundary-accent-main-500)',
	},
	disable: {
		background: 'var(--neutral-gray-colors-neutral-gray-300)',
		border: 'none',
	},
	success: {
		background: 'none',
		border: '2px solid var(--neutral-gray-colors-neutral-gray-300)',
	},
	successActive: {
		background: 'var(--primary-blue-primary-blue-900)',
		border: '2px solid var(--secundary-accent-secundary-accent-main-500)',
	},
}

const stateAfterBefore = {
	active: {
		background: 'var(--secundary-accent-secundary-accent-main-500)',
		height: '26px',
	},
	activeUnselected : {
		background: 'var(--secundary-accent-secundary-accent-main-500)',
		height: '26px',
	},
	disable: {
		background: 'var(--neutral-gray-colors-neutral-white)',
		height: '26px',
	},
	success: {
		background: 'var(--secundary-accent-secundary-accent-main-500)',
		height: '26px',
	},
	successActive: {
		background: 'var(--secundary-accent-secundary-accent-main-500)',
		height: '26px',
	},
}

const planState = {
	mensual: 'mensual',
	anual: 'anual',
	trimestral: 'trimestral',
	semestral: 'semestral',
}
const position = {
	top: 'top',
	bottom: 'bottom',
	left: 'left',
	right: 'right',
	mid: 'mid',
	topMid: 'topMid',
	topRight: 'topRight',
	topLeft: 'topLeft',
	bottomMid: 'bottomMid',
	bottomRight: 'bottomRight',
	bottomLeft: 'bottomLeft',
	leftMid: 'leftMid',
	leftTop: 'leftTop',
	leftBottom: 'leftBottom',
	rightMid: 'rightMid',
	rightTop: 'rightTop',
	rightBottom: 'rightBottom',
	center: 'center',
}

export { state, stateCss, stateAfterBefore, planState, position }

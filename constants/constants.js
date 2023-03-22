const state = {
	active: 'active',
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
//america country code and name
const countryCodes = [
	{ countryCode: 'AG', name: 'Antigua and Barbuda', codeArea: 1 },
	{ countryCode: 'AR', name: 'Argentina', codeArea: 54 },
	{ countryCode: 'BB', name: 'Barbados', codeArea: 1 },
	{ countryCode: 'BO', name: 'Bolivia', codeArea: 591 },
	{ countryCode: 'BR', name: 'Brazil', codeArea: 55 },
	{ countryCode: 'BS', name: 'Bahamas', codeArea: 1 },
	{ countryCode: 'BZ', name: 'Belize', codeArea: 501 },
	{ countryCode: 'CA', name: 'Canada', codeArea: 1 },
	{ countryCode: 'CL', name: 'Chile', codeArea: 56 },
	{ countryCode: 'CO', name: 'Colombia', codeArea: 57 },
	{ countryCode: 'CR', name: 'Costa Rica', codeArea: 506 },
	{ countryCode: 'CU', name: 'Cuba', codeArea: 53 },
	{ countryCode: 'DM', name: 'Dominica', codeArea: 1 },
	{ countryCode: 'DO', name: 'Dominican Republic', codeArea: 1 },
	{ countryCode: 'EC', name: 'Ecuador', codeArea: 593 },
	{ countryCode: 'GD', name: 'Grenada', codeArea: 1 },
	{ countryCode: 'GT', name: 'Guatemala', codeArea: 502 },
	{ countryCode: 'HN', name: 'Honduras', codeArea: 504 },
	{ countryCode: 'HT', name: 'Haiti', codeArea: 509 },
	{ countryCode: 'JM', name: 'Jamaica', codeArea: 1 },
	{ countryCode: 'KN', name: 'Saint Kitts and Nevis', codeArea: 1 },
	{ countryCode: 'LC', name: 'Saint Lucia', codeArea: 1 },
	{ countryCode: 'MX', name: 'Mexico', codeArea: 52 },
	{ countryCode: 'NI', name: 'Nicaragua', codeArea: 505 },
	{ countryCode: 'PA', name: 'Panama', codeArea: 507 },
	{ countryCode: 'PE', name: 'Peru', codeArea: 51 },
	{ countryCode: 'PR', name: 'Puerto Rico', codeArea: 1 },
	{ countryCode: 'SV', name: 'El Salvador', codeArea: 503 },
	{ countryCode: 'TT', name: 'Trinidad and Tobago', codeArea: 1 },
	{ countryCode: 'US', name: 'United States', codeArea: 1 },
	{ countryCode: 'UY', name: 'Uruguay', codeArea: 598 },
	{ countryCode: 'VC', name: 'Saint Vincent and the Grenadines', codeArea: 1 },
	{ countryCode: 'VE', name: 'Venezuela', codeArea: 58 },

]

export { state, stateCss, stateAfterBefore, planState, position, countryCodes }

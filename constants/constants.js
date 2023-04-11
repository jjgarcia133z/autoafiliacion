
import provinciasCostarica from '@/data/provincias.json'
import cantonesCostarica from '@/data/cantones.json'
import districtCostarica from '@/data/distritos.json'
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
	activeUnselected: {
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
const tipoIdentificaciones = [
	{ value: '1', label: 'Cedula de nacional' },
	{ value: '2', label: 'Dimex' },
	{ value: '3', label: 'Pasaporte' },
]
const generos = [
	{ value: 'M', label: 'Masculino' },
	{ value: 'F', label: 'Femenino' },
	{ value: 'S', label: 'Sin Especificar' },
]
const regex = { // for email, phone, etc
	//phone example:  71144994 or 7114 4994
	phone: /^(\d{4}|\d{4}\s)\d{4}$/,
	//email example:   emial@domain.com
	email: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	// 9 digits
	identification: /^\d{9}$/,
	//dimex example: 000000000000000000
	dimex: /^\d{18}$/,
	//passport example: 000000000000000000
	passport: /^\d{9}$/,
	onlyNumbers: /^\d+$/,
	//min 2 characters, max 50 characters, only letters and spaces and special characters like accents
	names: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	//address min 1 character, max 100 characters permit spaces, numbers, letters, and special characters
	address: /^[a-zA-Z0-9\s\-\_\.\,\#\°\º\ª\(\)\:\;\¿\?\¡\!\+\*\/\&\%\$\@\[\]\{\}]{1,1000}$/,
	
}
const parentescosData = [
	{ value: '1', label: 'Padre' },
	{ value: '2', label: 'Madre' },
	{ value: '3', label: 'Hijo' },
	{ value: '4', label: 'Hija' },
	{ value: '5', label: 'Hermano' },
	{ value: '6', label: 'Hermana' },
	{ value: '7', label: 'Tio' },
	{ value: '8', label: 'Tia' },
	{ value: '9', label: 'Primo' },
	{ value: '10', label: 'Prima' },
	{ value: '11', label: 'Abuelo' },
	{ value: '12', label: 'Abuela' },
	{ value: '13', label: 'Nieto' },
	{ value: '14', label: 'Nieta' },
	{ value: '15', label: 'Sobrino' },
	{ value: '16', label: 'Sobrina' },
	{ value: '17', label: 'Conyugue' },
	{ value: '18', label: 'Otro' },
]

	
	
export {
	state,
	stateCss,
	stateAfterBefore,
	planState,
	position,
	tipoIdentificaciones,
	generos,
	provinciasCostarica,
	cantonesCostarica,
	districtCostarica,
	regex,
	parentescosData
}

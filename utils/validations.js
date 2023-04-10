const validateInput = (func, regex) => {
	if (regex) {
		return regex.test(func)
	} else {
		return !!func
	}
}

export { validateInput }

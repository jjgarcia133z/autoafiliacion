import { useState } from 'react'
const useFetch = () => {
	const [response, setResponse] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	async function fetchData(url, options) {
		try {
			const response = await fetch(url, options)
			const json = await response.json()
			setResponse(json)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}

		return { response, loading, error }
	}
	return {
		fetchData,
	}
}

export default useFetch

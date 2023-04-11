import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
	const [response, setResponse] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url, options)
				const json = await res.json()
				setResponse(json)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url, options])

	return { response, loading, error }
}

export default useFetch


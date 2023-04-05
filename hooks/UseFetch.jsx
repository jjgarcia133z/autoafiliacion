import { useEffect, useState } from 'react'
const useFetch = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	async function fetchData(url) {
		try {
			const response = await fetch(
				url
			)
			const json = await response.json()
			setData(json)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}

		return { data, loading, error }
	}

    
	return {
		fetchData
	}
}

export default useFetch

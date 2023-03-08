import React from 'react'

const UseFetch = () => {
	const [data, setData] = React.useState(null)
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	React.useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					'https://ranekapi.origamid.dev/json/api/produto'
				)
				const json = await response.json()
				setData(json)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])
	const get = (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((json) => json)
	}
    
	return {
		data,
		loading,
		error,
		get,
	}
}

export default UseFetch

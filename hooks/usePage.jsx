import { useRouter } from 'next/router'
const usePage = () => {

	const router = useRouter()
	/**
	 * @param {string} page  - url to go
	 * @param {function} func - function to execute before go to page
	 * @returns
	 */
	const goTo = (page, func=null) => {
		if(func){
			func() //execute function before go to page
		}
		router.push(page)

	}
	return{
		goTo,
	}
    
}

export default usePage
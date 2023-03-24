import { useRouter } from 'next/router'
const usePage = () => {

	const router = useRouter()

	const goTo = (page, func=null) => {
		if(func){
			func()
		}
		router.push(page)

	}
	return{
		goTo
	}
    
}

export default usePage
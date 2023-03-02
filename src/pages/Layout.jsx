import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<section>
			<header>header</header>
			<section>
				<aside>menu</aside>
				<section> <Outlet /> </section>
			</section>
			<footer>footer</footer>
		</section>
	)
}

export default Layout

import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import CMP01 from '@/components/sideMenu/CMP01'
import CMP017 from '../header/CMP017'
import CMP08 from '../home/CMP08'
const Layout = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<header>
					<CMP017 />
				</header>
				<section>
					<aside>
						<CMP01 />
					</aside>
					<article>
						{children}
						<CMP08 />
					</article>
				</section>
				<footer>footer</footer>
			</MainLayout>

		</>
	)
}
export default Layout
const MainLayout = styled.main`
  display: grid;
  grid-template-rows: 60px 10fr 41px;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  min-height: 100vh;
  min-width: 100%;

  padding: 32px 56px 32px 56px;
  header {
    grid-area: header;
    /* background-color: #f47676; */
  }
  section {
    display: grid;
    grid-template-columns: 314px 1fr;
    grid-area: content;
    /* background-color: #cdcdcd; */
    grid-template-areas: "menu article";
  }
  article {
    grid-area: article;
    /* background-color: #051aff; */
  }
  aside {
    grid-area: menu;
  }
  footer {
    grid-area: footer;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`

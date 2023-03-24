import Head from 'next/head'
import styled from 'styled-components'
import CMP01 from '@/components/sideMenu/CMP01'
import CMP017 from '@/components/header/CMP017'
import { useSelector } from 'react-redux'
import CMP026 from '../common/CMP026'
import { useEffect, useState } from 'react'
import CMP00 from '../modalContents/CMP00'
import { setWelcomeModal } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import { setFlags } from '@/store/slices/storageSlice'
import useFetch from '@/hooks/useFetch'
import data from '@/data/countries.json'
const Layout = ({ children, title, bg, gd = 0 }) => {
	const { welcomeModal, currentIndex } = useSelector((state) => state.config)
	const { flagData } = useSelector((state) => state.storage)
	const [showModal, setShowModal] = useState(true)
	const dispatch = useDispatch()
	useEffect(() => {
		const transformedData = data?.map((country) => {
			//validate if country.idd has suffixes, if not, return null
			let suffixes = country.idd.suffixes ? country.idd.suffixes[0] : ''
			let root = country.idd.root ?? ''
			let countryCode = country.car.signs ? country.car.signs[0] : ''
			let src = country.flags.png ?? ''
			let name = country.name.common ?? ''
			return {
				src,
				name,
				countryCode,
				codeArea: root + suffixes,
			}
		})
		dispatch(setFlags(transformedData))
	}, [data])
	const funcOnClose = () => {
		dispatch(setWelcomeModal(false))
	}
	return (
		<>
			<Head>
				<title>vb</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout currentIndex={currentIndex}>
				<header>
					<CMP017 />
				</header>
				<section>
					<aside>
						<CMP01 />
					</aside>
					<article>{children}</article>
				</section>
				{welcomeModal && showModal && (
					<CMP026
						title="¡Hola, que bueno verte por acá!"
						showModal={showModal}
						setModal={setShowModal}
						funcOnClose={funcOnClose}
					>
						<CMP00></CMP00>
					</CMP026>
				)}
				<footer>® Derechos reservados - Medismart 2023</footer>
			</MainLayout>
		</>
	)
}
export default Layout

const MainLayout = styled.main`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: calc(48px + 80px) 1fr 80px;
  grid-template-columns: 1fr minmax(330px, 1440px) 1fr;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  min-height: 100vh;
  min-width: 100%;
  padding: 48px 56px 0 56px;
  header {
    grid-column: 2/3;
    /* background-color: #f47676; */
  }
  & > section {
    display: grid;
    grid-template-columns: 314px 1fr;
    grid-column: 2/3;
    grid-template-areas: "menu article";
    box-shadow: 0px 4px 4px rgba(192, 200, 214, 0.25);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    place-content: center;
    background-color: ${(props) => props.currentIndex !== 1 ? ' var(--neutral-background-neutral-olive-100)' : 'var(--neutral-gray-colors-neutral-white)' };

  }
  & > article {
    grid-area: article;
    /* background-color: #051aff; */
  }
  & > aside {
    grid-area: menu;
  }
  & > footer {
    grid-area: footer;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    //styleName: Body/Body Small - Montserrat Medium;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: center;
  }
`

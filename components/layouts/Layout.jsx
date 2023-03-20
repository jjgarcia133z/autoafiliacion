import Head from 'next/head'
import styled from 'styled-components'
import CMP01 from '@/components/sideMenu/CMP01'
import CMP017 from '@/components/header/CMP017'
import ImagePortada from '@/assets/img/PortadaAfiliacion_medismart.png'
import { useSelector } from 'react-redux'
import CMP026 from '../common/CMP026'
import { useState } from 'react'
import CMP00 from '../modalContents/CMP00'
import { setWelcomeModal } from '@/store/slices/configSlide'
import { useDispatch } from 'react-redux'

const Layout = ({ children, title }) => {
	const { welcomeModal } = useSelector((state) => state.config)
	const [showModal, setShowModal] = useState(true)
	const dispatch = useDispatch()
	const funcOnClose = () => {
		dispatch(setWelcomeModal(false))
	}
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout imageUrl={ImagePortada}>
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

  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  min-height: 100vh;
  min-width: 100%;

  padding: 48px 56px 0 56px;
  header {
    grid-area: header;
    /* background-color: #f47676; */
  }
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-area: content;
    grid-template-areas: "article";
    box-shadow: 0px 4px 4px rgba(192, 200, 214, 0.25);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      background-image: url(${(props) => props.imageUrl.src});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top right;
      background-color: #ffffff;
      background-size: 100%;
      height: 388px;
      width: 1328px;
      top: 0px;
      border-radius: 10px;
      top: 0;
      right: 0;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      background: rgb(40, 65, 109);
      background: linear-gradient(
        180deg,
        rgba(40, 65, 109, 0.28) 0%,
        rgba(40, 65, 109, 0.28) 12%,
        rgba(255, 255, 255, 0.8) 33%,
        rgba(255, 255, 255, 02) 45%,
        #fff 100%
      );

      height: 780px;
      width: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      border-radius: 10px;
    }
  }
  article {
    grid-area: article;
    /* background-color: #051aff; */
  }
  aside {
    grid-area: menu;
    display: none
  }
  footer {
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

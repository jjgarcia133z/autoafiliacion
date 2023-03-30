/**
 * @file Header.jsx
 * @description Header de la aplicación donde se muestra el logo de medismart y el componente CMP018
 * @componentNumber CMP017
 */
import Logo from '@/assets/img/Logo_medismart.png'
import styled from 'styled-components'
import BreadCrumb from './BreadCrumb'
import { useSelector } from 'react-redux'
const Header = () => {
	const { steps } = useSelector((state) => state.config)
	const getActiveStep = () => {
		const activeStep = steps.find((step) => step.status === 'active' || step.status === 'successActive')
		if (!activeStep) return ''
		return activeStep.title
	}
	return (
		<HeaderContainer>
			<div>
				<img src={Logo.src} alt="medismart logo" />
			</div>
			<div>
				<div>
					<BreadCrumb
						parentPage="Nueva afiliación"
						currentPage={getActiveStep()}
					/>
				</div>
				<div></div>
				{/*icon section*/}
			</div>
		</HeaderContainer>
	)
}

export default Header
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;

  margin-bottom: 48px;
  & > div:nth-child(1) {
    height: 80px;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 0px 76px;
    height: 48px;
    width: 100%;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      width: 100%;
      height: 48px;
      //styleName: Body/Body Medium  - Montserrat Medium;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
    }
    & > img {
      width: 272px;
      height: 80px;
    }
  }
  & > div:nth-of-type(3) {
    width: 100%;
  }
`

import Logo from '@/assets/img/Logo_medismart.png'
import styled from 'styled-components'
import CMP018 from './CMP018'
const CMP017 = () => {
	return (
		<HeaderContainer>
			<div>
				<img src={Logo.src} alt="" />
			</div>
			<div>
				<div>
					<CMP018 parentPage="Nueva afiliación" currentPage="Tipo Plan" />
				</div>
				<div>565</div>
			</div>
		</HeaderContainer>
	)
}

export default CMP017
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

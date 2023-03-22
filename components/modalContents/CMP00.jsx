import React from 'react'
import welcome from '@/assets/img/welcome.png'
import styled from 'styled-components'
import CMP08 from '../home/CMP08'
const CMP00 = () => {
	return (
		<WelcomeModal>
			<p>Ahora podrás realizar tu afiliación de manera rápida y segura.</p>
			<p>
        Este proceso de afiliación podrá tomarte unos 5 minutos de tu tiempo.
			</p>
			<div>
				<img src={welcome.src} alt="welcome" />
			</div>
			<CMP08 text="Empecemos" type='primary'/>
		</WelcomeModal>
	)
}

export default CMP00

const WelcomeModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & button {
    //styleName: Button/Primary Button - Montserrat Medium;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--neutral-gray-colors-neutral-white);
    background: var(--primary-blue-primary-blue-900);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 48px;
    margin-top: 16px;
  }

  & p:nth-child(1) {
    //styleName: Body/Body Large - Montserrat Regular;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 16px;
    max-width: 706px;
    color: var(--primary-blue-primary-blue-main-500);
  }
  & p:nth-child(2) {
    //styleName: Body/Body Medium - Montserrat Regular;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    max-width: 706px;
    margin-bottom: 35.25px;
    color: var(--primary-blue-primary-blue-main-500);
  }
  & div:first-of-type {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 400px;
      margin-bottom: 43.63px;
    }
  }
`

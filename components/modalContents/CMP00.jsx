import React from 'react'
import welcome from '@/assets/img/welcome.png'
import styled from 'styled-components'
import CMP08 from '../home/CMP08'
import { useDispatch } from 'react-redux'
import { setWelcomeModal } from '@/store/slices/configSlice'
const CMP00 = () => {
	const dispatch = useDispatch()
	const funcOnClose = () => {
		console.log('Click')
		dispatch(setWelcomeModal(false))
	}
	return (
		<WelcomeModal>
			<p>Ahora podrás realizar tu afiliación de manera rápida y segura.</p>
			<p>
        Este proceso de afiliación podrá tomarte unos 5 minutos de tu tiempo.
			</p>
			<div>
				<img src={welcome.src} alt="welcome" />
			</div>
			<div>
				<CMP08 text="Empecemos" style="primaryLarge" onClickHandle={funcOnClose} />
			</div>
		</WelcomeModal>
	)
}

export default CMP00

const WelcomeModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & p:nth-child(1) {
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
  & > div:nth-of-type(1) {
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
  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

/**
 * @file PoliticaCheckbox.jsx
 * @description Checkbox de politica de privacidad.
 * @componentNumber CMP07
 *
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import ModalContainer from '../common/ModalContainer'
import PoliticaDePrivacidad from '../common/PoliticaDePrivacidad'
import { Check } from '../icons/Icons'
const PoliticaCheckbox = ({ value, state }) => {
	const [showModal, setShowModal] = useState(false)
	const funcOnClose = () => {
		setShowModal(false)
	}
	const handleChange = (e) => {
		state(e.target.checked)
	}
	const aceptHandler = () => {
		state(true)
		setShowModal(false)
	}
	const openNewTab = () => {
		const version = '6_1'
		const pdfUrl = `https://medismart.net/wp-content/uploads/2021/12/TERMINOS-Y-CONDICIONES-MEDISMART-PLAN-DE-MEDICINA-PREPAGADA-REV-${version}.pdf`
		window.open(pdfUrl)
	}
	return (
		<Politica checked={value}>
			<label htmlFor="ckpoli">
				<input
					type="checkbox"
					name=""
					id="ckpoli"
					hidden
					value={value}
					onChange={(e) => handleChange(e)}
				/>
				{value && <Check />}
			</label>
			<div>
				<p>
          Al marcar esta casilla y hacer clic en &quot;Continuar&quot;, acepto
          la
				</p>
				<button onClick={() => openNewTab()}>política de privacidad.</button>
			</div>

			{showModal && (
				<ModalContainer
					title="Política de privacidad"
					showModal={showModal}
					setModal={setShowModal}
					funcOnClose={funcOnClose}
				>
					<PoliticaDePrivacidad acept={aceptHandler} />
				</ModalContainer>
			)}
		</Politica>
	)
}
export default PoliticaCheckbox

const Politica = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  & > label {
    width: 24px;
    height: 24px;
    background-color: var(--neutral-gray-colors-neutral-white);
    border: 1px solid var(--primary-blue-primary-blue-200);
    border-radius: 2px;
    position: relative;
    & > i {
      display: flex;
      position: absolute;
      color: var(--secundary-accent-secundary-accent-main-500);
      font-size: 18px;
      font-weight: 600;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 0;

      color: var(--primary-blue-primary-blue-900);
    }
    & > button {
      //styleName: Link/Link;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      color: var(--primary-green-primary-green-700);
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
/////

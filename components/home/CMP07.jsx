import React, { useState } from 'react'
import styled from 'styled-components'
import { Check } from '../icons/Icons'
const CMP07 = () => {
	const [checked, setChecked] = useState(false)
	const handleChange = (e) => {
		console.log(e.target.checked)
		setChecked(e.target.checked)
	}
	return (
		<Politica checked={checked}>
			<label htmlFor="ckpoli">
				<input
					type="checkbox"
					name=""
					id="ckpoli"
					hidden
					value={checked}
					onChange={(e) => handleChange(e)}
				/>
				{checked && (<Check />)}
			</label>
			<div>
				<p>
          Al marcar esta casilla y hacer clic en &quot;Continuar&quot;, acepto
          la
				</p>
				<button>política de privacidad.</button>
			</div>
		</Politica>
	)
}
export default CMP07

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
    & > i{
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

import React from 'react'
import styled from 'styled-components'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP07 = () => {
	return (
		<Politica>
			<span>
				<input type="checkbox" name="" id="" />
			</span>
			<div>
				<p>
                Al marcar esta casilla y hacer clic en &quot;Continuar&quot;, acepto la
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
  margin-top: 32px;
  gap: 16px;
  & > span {
      & > input {
        width: 24px;
        height: 24px;
        background-color: var(--neutral-gray-colors-neutral-white);
        border: 1px solid var(--primary-blue-primary-blue-200);
        box-sizing: border-box;

        &::checked {
          background-color: var(--primary-blue-primary-blue-500);
        }
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

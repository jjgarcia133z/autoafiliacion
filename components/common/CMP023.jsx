import React from 'react'
import styled from 'styled-components'
import cuponBackground from '@/assets/img/cuponBackGround.png'
import { HiOutlineReceiptTax } from 'react-icons/hi'
import { FiCheck } from 'react-icons/fi'

const CMP023 = () => {
	return (
		<Cupon background={cuponBackground}>
			<div>
				<span>
					<HiOutlineReceiptTax />{' '}
				</span>
				<div>
					<h4>Cupón de descuento</h4>
					<p>Aplica el codigo promocional</p>
				</div>
			</div>
			<div>
				<input type="text" />
				<button>
					{' '}
					<FiCheck /> Aplicar
				</button>
			</div>
		</Cupon>
	)
}

export default CMP023

const Cupon = styled.div`
  display: flex;
  flex-direction: column;
  height: 121px;
  width: 304px;
  left: 402px;
  top: 1027px;
  border-radius: 10px;
  padding: 16px;
  background-image: url(${(props) => props.background.src});
  & > div:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      background: var(--neutral-gray-colors-neutral-white);
      border-radius: 10px;
      & > svg {
        font-size: 20px;
        color: var(--primary-blue-primary-blue-900);
        height: calc(
          18px + calc(24px - 18px)
        ); /*se calcula el tamaño interno que trae el propio svg de la libreria de iconos*/
        width: calc(
          14px + calc(24px - 14px)
        ); /*se calcula el tamaño interno que trae el propio svg de la libreria de iconos*/
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      & > h4 {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        color: var(--primary-blue-primary-blue-900);
      }
      & > p {
        //styleName: Body/Body Small - Montserrat Regular;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
        color: var(--primary-blue-primary-blue-900);
      }
    }
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: row;
    & > input {
      width: 143px;
      height: 36px;
      margin-right: 8px;
      background: var(--neutral-gray-colors-neutral-white);
      //trmobr style
      border-radius: 5px;
      border: none;
    }
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--neutral-gray-colors-neutral-white);
      border-radius: 5px;
      border: none;
      cursor: pointer;
      //styleName: Body/Body Small - Montserrat Medium;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 17px;
      text-align: left;
      width: max-content;
      height: 36px;
      gap: 8px;
      padding: 8px;
      & > svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`

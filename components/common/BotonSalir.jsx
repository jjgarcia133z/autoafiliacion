/**
 * @file: BotonSalir.jsx
 * @description: Boton de salir de la pagina de afiliacion.
 * @componentNumber: Select
 */
import React from 'react'
import styled from 'styled-components'
import { FiChevronLeft as IconLeft } from 'react-icons/fi'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const BotonSalir = () => {
	return (
		<ContainerBtnExit>
			<IconLeft />
			<span>Salir</span>
		</ContainerBtnExit>
	)
}

export default BotonSalir

const ContainerBtnExit = styled.button`
  display: flex;
  border: none;
  background: none;
  outline: none;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  padding: 4px 0px 8px 0px;
  margin-bottom: 32px;
  &:hover span, &:hover svg {
    cursor: pointer;
    color: var(--secundary-accent-secundary-accent-main-500);
  }

  & > span {
    //styleName: Body/Body Small - Montserrat Regular;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--neutral-gray-colors-neutral-white);
  }
  & img {
    width: 24px;
    height: 24px;
    color: #a6cb83;
  }
  & svg {
    width: 24px;
    height: 24px;
    color: var(--neutral-gray-colors-neutral-white);
  }
`

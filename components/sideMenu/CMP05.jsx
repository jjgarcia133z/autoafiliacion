import React from 'react'
import styled from 'styled-components'
import { FiChevronLeft as IconLeft } from 'react-icons/fi'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP05 = () => {
	return (
		<ContainerBtnExit>
			<IconLeft />
			<span>Salir</span>
		</ContainerBtnExit>
	)
}

export default CMP05

const ContainerBtnExit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  padding: 8px 8px 8px 0px;
  margin-bottom: 32px;
  &:hover {
    cursor: pointer;
  }

  & > span {
    //styleName: Body/Body Small - Montserrat Regular;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
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
    color: var(--secundary-accent-secundary-accent-main-500);
  }
`

import React from 'react'
import styled from 'styled-components'
import { HiPlus as Plus } from 'react-icons/hi'

const CMP015 = ({click}) => {
	const handleClick = () => {
		click()
	}
	return (
		<ButtonAdd onClick={()=> handleClick()}>
			<span>
				<Plus />
			</span>
			<span>Agregar</span>
		</ButtonAdd>
	)
}

export default CMP015
const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  height: 36px;
  width: fit-content;
  left: 24px;
  top: 201px;
  border-radius: 5px;
  padding: 9.5px 8px;
  background-color: var(--secundary-accent-secundary-accent-main-500);
  cursor: pointer;
  gap: 8px;
  & > span {
    display: flex;
    //styleName: Body/Body Small - Montserrat Medium;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    
    color: var(--primary-blue-primary-blue-900);
    text-transform: initial;
    text-align: left;
  }

  & > span:first-of-type {
    align-items: center;
    justify-content: center;
  }
  & > span:last-of-type {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: var(--secundary-accent-secundary-accent-400);
  }
`

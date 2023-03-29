/**
 * @file Contenedor_Menu.jsx
 * @description Contenedor de menu.
 * @componentNumber CMP01
 */
import React from 'react'
import styled from 'styled-components'
import StepperContainer from './StepperContainer'
import TopMenu from './TopMenu'

const Contenedor_Menu = () => {
	return (
		<>
			<Menu>
				<TopMenu />
				<StepperContainer />
			</Menu>
		</>
	)
}

export default Contenedor_Menu
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 24px;
  background: var(--primary-blue-primary-blue-main-500);
  border-radius: 10px 60px 0px 10px;
  gap: 16px;
  position: relative;
  z-index: 1;
  @media (max-width: 1194px) {
    flex-direction: row;
    background-color: transparent;
  }
`

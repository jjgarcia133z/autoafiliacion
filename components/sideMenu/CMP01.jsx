import React from 'react'
import styled from 'styled-components'
import CMP03 from './CMP03'
import TopMenu from './TopMenu'

const CMP01 = () => {

	return (
		<>
			<Menu>
				<TopMenu />
				<CMP03 />
			</Menu>
		</>
	)
}

export default CMP01
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100%;
width: 100%;
padding: 24px;
background: #2d4875;
border-radius: 10px 60px 0px 10px;
gap: 16px;
`
import React from 'react'
import styled from 'styled-components'

// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = () => {
	return (
		<Primary>
			<div className="componente-button-group-5 componente-button-group">
				<div className="comp-button-5 comp-button"><div className="continuar-7 continuar bodybody-medium----montserrat-medium">Atras</div></div>
			</div>
		</Primary>
	)
}

export default CMP10

const Primary = styled.div`
    box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;

width: 138px;
height: 48px;

/* Neutral Gray Colors/Neutral - White */

background: #FFFFFF;
/* Neutral Gray Colors/Neutral - Medium Grey */

border: 1px solid #C0C8C8;
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

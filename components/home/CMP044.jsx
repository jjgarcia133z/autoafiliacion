import React from 'react'
import styled from 'styled-components'


// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP044 = () => {
	return (
		<Primary>
			<div className="text-area">
				<h1 className="ingres-tus-datos-personales headlinesh3---radley-font-bold">Ingresá tus datos personales</h1>
			</div>


		</Primary>
	)
}

export default CMP044

const Primary = styled.div`
 .ingres-tus-datos-personales {
    color: #112145;
    font-weight: 400;
    left: 348px;
    line-height: 48px;
    position: absolute;
    top: 47px;
    white-space: nowrap;
}
.headlinesh3---radley-font-bold {
    
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
`

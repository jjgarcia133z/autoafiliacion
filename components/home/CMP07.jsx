import React, { useState } from 'react'
import styled from 'styled-components'

import checkImg from '@/assets/img/check-1@2x.png'


import checkImg1 from '@/assets/img/check-4@2x.png'

function Boton({ seleccionado, onClick }) {
	return (
		<Primary>
			<div className="list-check-2 list-check">
				<div className="check-2">
					<img
						onClick={onClick}
						className="check-3"
						src={seleccionado ?  checkImg1.src:checkImg.src }
						alt="check"
					/>
				</div>
				<p className="lorem-ipsum-dolor-si-1 bodybody-medium---montserrat-regular">
					<span className="span0-1 bodybody-medium---montserrat-regular">
            Al marcar esta casilla y hacer clic en "Continuar", acepto la
					</span>
					<span className="span1-1 bodybody-small---montserrat-medium">
            política de privacidad.
					</span>
				</p>
			</div>
		</Primary>
	)
}






// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP07 = () => {
	const [seleccionado, setSeleccionado] = useState(null)
	
	const handleClick = (valor) => {
		if (valor === seleccionado) {
		///	seleccionado=='icono-de-notificacin-4'
			setSeleccionado(null)
	
		} else {
			///seleccionado==='icono-de-notificacin-4'
			setSeleccionado(valor)
			
		}
	}
	return (
	
		<Boton
		
		
		
			seleccionado={seleccionado ==='1'}
			onClick={() => handleClick('1')}
		>

		</Boton>
	)
}

export default CMP07


const Primary = styled.div`
.span1-1 {
    color:#009382;
    font-weight: 500;
    line-height: 16.8px;
    text-decoration: underline;
}

.bodybody-small---montserrat-medium {
    font-family: "Montserrat", Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
}
 .lorem-ipsum-dolor-si-1 {
  
  flex: 1;
  font-weight: 400;
  line-height: 16px;
  margin-top: -1.00px;
  position: relative;
}
.span0-1 {
  color: var(--primary-blueprimary---blue-900);
  line-height: 19.2px;
}
.bodybody-medium---montserrat-regular {
    font-family: "Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
.list-check {
    display: flex;
    gap: 16px;
}
.check-3 {
  height: 24px;
  min-width: 24px;
  position: relative;
}

.check-2 {
    align-items: center;
    display: flex;
    gap: 8px;
    position: relative;
    width: fit-content;
}
.list-check-2 {
    align-items: center;
    left: 352px;
    position: absolute;
    top: 516px;
    width: 527px;
}
`
/////
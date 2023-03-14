import React from 'react'
import styled from 'styled-components'
import icon from '@/assets/img/icon.svg'
import line2 from '@/assets/img/line-2-3.svg'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = () => {
	return (
		<Primary>
			<div className="text-field-1 text-field-5">
				<div className="group-3-1">
					<div className="title">
						<div className="label montserrat-medium-bunting-20px">Correo electrónico</div>
						<img className="icon" src={icon.src} alt="Icon"/>
					</div>
					<div className="group-2-1">
						<div className="input-placeholder bodybody-medium---montserrat-regular">Ingresá tu correo electrónico</div>
					</div>
				</div>
				<img className="line-2-1 line-2-4" src={line2.src} alt="Line 2"/>
			</div>
		</Primary>
	)
}

export default CMP10

const Primary = styled.div`
.label-2 {
  width: 926px;
}

element.style {
}
.paso-2-datos-personales-03-00 .label {
    letter-spacing: 0;
    line-height: 19.2px;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: 271px;
}
.montserrat-medium-bunting-20px {
    color: #112145;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
}
    .title-1 {
  align-items: center;
  display: flex;
  gap: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 285px;
}
    .text-field-1 {
  left: 348px;
  top: 530px;
}
.group-3-1 {
  align-self: stretch;
  height: 60px;
  min-width: 287px;
  position: relative;
}
.text-field-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  width: 287px;
}

`

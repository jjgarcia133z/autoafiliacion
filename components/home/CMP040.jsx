import React from 'react'
import styled from 'styled-components'
import icon from '@/assets/img/icon.svg'
import line2 from '@/assets/img/line-2.svg'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = () => {
	return (
		<Primary>
			<div className="text-area">
				<div className="group-3-2">
					<div className="label-2 label-3 montserrat-medium-bunting-20px">Dirección exacta</div>
					<div className="group-2-3">
						<p className="input-placeholder-1 bodybody-medium---montserrat-regular">
                    Ingresá tu dirección de domicilio
						</p>
					</div>
				</div>
				<div className="group-4">
					<div className="frame-37370"><img className="line-2-3 line-2-4" src={line2.src} alt="Line 2"/></div>
				</div>
			</div>


		</Primary>
	)
}

export default CMP10

const Primary = styled.div`
.label-2 {
  width: 926px;
}
.title {
  align-items: center;
  display: flex;
  gap: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 287px;
}
.line-2-4 {
    height: 1px;
    object-fit: cover;
    position: relative;
}
.input-placeholder-1 {
  color: #4d638a;
  font-weight: 400;
  line-height: 19.2px;
  min-height: 40px;
  width: 923px;
}
.line-2-1 {
  align-self: stretch;
  min-width: 287px;
}

element.style {
}
.paso-2-datos-personales-03-00 .input-placeholder {
    color: #4d638a;
    font-weight: 400;
    line-height: 19.2px;
    min-height: 20px;
    white-space: nowrap;
}
.bodybody-medium---montserrat-regular {
    font-family:"Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
.group-2-1 {
  align-items: flex-start;
  display: flex;
  height: 20px;
  left: 0;
  min-width: 289px;
  position: absolute;
  top: 40px;
}
.icon {
  height: 8px;
  min-width: 8px;
  position: relative;
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

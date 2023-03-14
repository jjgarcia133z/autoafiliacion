import React from 'react'
import styled from 'styled-components'

import line from '@/assets/img/rectangle-4379-1.png'

const CMP08 = () => {
	return (
		<Primary>
			<img src={line} width="100" height="50" />

			<div className="aditional-plan">
				<div className="overlap-group4">
					<div className="overlap-group-1">
						<div className="frame-37365">
							<div className="rectangle-4413"></div>
							<img src="../../src/assets/img/adobestock-376840788-1-2.png"/>
						</div>
						<img className="aditonal-plan" src="img/aditonal-plan-1.svg" alt="Aditonal Plan"/>
						<div className="box-content">
							<div className="left-colum">
								<div className="flex-col-4 flex-col-7">
									<div className="etiqueta-de-monto-1">
										<div className="title-4 bodybody-medium---montserrat-regular">Por solo</div>
										<div className="group-31">
											<div className="x000-1 x000-2 bodybody-large---montserrat-bold">$2.26</div>
										</div>
									</div>
									<div className="check"><img className="check-1" src="img/check.svg" alt="Check"/></div>
									<div className="agregar-al-plan valign-text-middle bodybody-small---montserrat-regular">
                            Agregar<br/>al plan
									</div>
								</div>
							</div>
							<img className="line-14" src="img/line-14.svg" alt="Line 14"/>
							<div className="right-colum">
								<div className="flex-col-5 flex-col-7">
									<div className="text-3">
										<div className="plan-onco-smart headlinesh5---radley-font-bold">Plan OncoSmart</div>
										<p className="para-todas-aquellas valign-text-middle bodybody-medium----montserrat-medium">
                              Este plan es para todas aquellas personas interesadas en la prevención y detección
                              temprana de cáncer, así como personas sobrevivientes o en el proceso.
										</p>
								
									

									</div>
									<img className="vector" src="img/vector-1.svg" alt="Vector"/>
									<div className="flex-row-2">
										<div className="comp-button-1 comp-button-7">
											<p className="continuar-1 continuar-5 bodybody-small---montserrat-medium">
                                Da click acá para ver más información
											</p>
										</div>
										<img className="vector-1" src="img/vector-2.svg" alt="Vector"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="vector-2" src="img/vector.svg" alt="Vector"/>
				</div>
			</div>
		</Primary>
	)
}

export default CMP08

const Primary = styled.div`
     .aditional-plan {
  align-items: flex-start;
  display: flex;
  min-width: 918px;
}
.vector-1 {
    align-self: flex-end;
    height: 14px;
    width: 13px;
}
.valign-text-middle {
    color: #ffffff;
    font-weight: 600;
    line-height: 33.6px;
    white-space: nowrap;
}

.bodybody-large---montserrat-bold {
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;
}
.agregar-al-plan {
    left: 0;
    position: absolute;
    top: 0;
}

.bodybody-medium---montserrat-regular {
    font-family: "Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}

.title-4 {
    color: #ffffff;
    font-weight: 400;
    line-height: 19.2px;
    margin-top: -1.00px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}
.bodybody-small---montserrat-medium {
    font-family: "Montserrat", Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
}
.x000-2 {
  color: #ffffff;
  font-weight: 600;
  line-height: 33.6px;
  white-space: nowrap;
}
.x000-1 {
  left: 0;
  position: absolute;
  top: 0;
}

.continuar-5 {
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.continuar-1 {
  color: var(--primary-blueprimary---blue-900);
  line-height: 16.8px;
}
.comp-button-7 {
  align-items: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: fit-content;
}
.comp-button-1 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #c0c8c8;
  gap: 8px;
  height: 36px;
  padding: 8px;
  position: relative;
}

.flex-row-2 {
  align-items: flex-start;
  display: flex;
  gap: 282px;
  height: 41px;
  min-width: 582px;
}

.vector {
    align-self: flex-end;
    height: 14px;
    margin-right: 90.82px;
    width: 13px;
}
element.style {
}
.para-todas-aquellas {
    color: var(--neutral-gray-colorsneutral---white);
    font-weight: 500;
    height: 45px;
    line-height: 19.2px;
    width: 664px;
}
.valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.bodybody-medium----montserrat-medium {
    font-family:  "Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
}
.para-todas-aquellas {
    color: #ffffff;
    font-weight: 500;
    height: 45px;
    line-height: 19.2px;
    width: 664px;
}
.valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.headlinesh5---radley-font-bold {
    font-family: var(--font-family-radley);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
.plan-onco-smart {
    color: #ffffff;
    font-weight: 400;
    line-height: 38.4px;
    margin-left: 1px;
    margin-top: -1px;
    min-height: 42px;
    white-space: nowrap;
}
.text-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 2px;
  min-height: 91px;
  width: 664px;
}
.flex-col-7 {
  display: flex;
  flex-direction: column;
}
.flex-col-7 {
  display: flex;
  flex-direction: column;
}
.flex-col-5 {
  align-items: flex-start;
  gap: 5px;
  min-height: 156px;
  width: 666px;
}
.box-content {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  left: 40px;
  position: absolute;
  top: 16px;
  width: 838px;
}
.rectangle-4413 {
  background: linear-gradient(180deg, rgb(45, 72, 117) 33.85%, rgb(0, 175, 161) 100%);
  border-radius: 5px;
  height: 191px;
  min-width: 918px;
  position: relative;
}
.aditonal-plan {
  height: 191px;
  left: 0;
  position: absolute;
  top: 0;
  width: 918px;
}
.frame-37365 {
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 0;
  width: fit-content;
}
.overlap-group4 {
  height: 191px;
  position: relative;
  width: 918px;
}
.overlap-group-1 {
  height: 191px;
  left: 0;
  position: absolute;
  top: 0;
  width: 918px;
}

`

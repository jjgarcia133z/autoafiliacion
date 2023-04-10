import styled from 'styled-components'
import React, { useState } from 'react'
import plan from '@/assets/img/aditonal-plan-1.svg'
import check from '@/assets/img/check.svg'
import check1 from '@/assets/img/check-4@2x.png'
import line14 from '@/assets/img/line-14.svg'
import vector1 from '@/assets/img/vector-1.svg'
import vector2 from '@/assets/img/vector-2.svg'
import vector from '@/assets/img/vector.svg'
import ModalContainer from '../common/ModalContainer'
import PlanOncoSmartInfo from '../modalContents/PlanOncoSmartInfo'

function Boton({ seleccionado, onClick, setModal, modal }) {
	const handleClick = () => {
		if (onClick) {
			setModal(!modal)
		}
	}
	return (
		<div className="aditional-plan">
			<div className="overlap-group4">
				<div className="overlap-group-1">
					<div className="frame-37365">
						<div className="rectangle-4413"></div>
					</div>
					<img className="aditonal-plan" src={plan.src} alt="Aditonal Plan" />
					<div className="box-content">
						<div className="left-colum">
							<div className="flex-col-4 flex-col-7">
								<div className="etiqueta-de-monto-1">
									<div className="title-4 bodybody-medium---montserrat-regular">
                    Por solo
									</div>
									<div className="group-31">
										<div className="x000-1 x000-2 bodybody-large---montserrat-bold">
                      $2.26
										</div>
									</div>
								</div>
								<div className="check">
									<img
										onClick={onClick}
										className="check-1"
										src={seleccionado ? check1.src : check.src}
										alt="Check"
									/>
								</div>
								<div className="agregar-al-plan">
                  Agregar
									<br />
                  al plan
								</div>
							</div>
						</div>
						<img className="line-14" src={line14.src} alt="Line 14" />

						<div className="right-colum">
							<div className="flex-col-5 flex-col-7">
								<div className="text-3">
									<div className="plan-onco-smart">Plan OncoSmart</div>
									<p className="para-todas-aquellas">
                    Este plan es para todas aquellas personas interesadas en la
                    prevención y detección temprana de cáncer, así como personas
                    sobrevivientes o en el proceso.
									</p>
								</div>
								<img className="vector" src={vector1.src} alt="Vector" />
								<div className="flex-row-2">
									<button className="comp-button-1 comp-button-7" onClick={()=>handleClick()}>
                    Da click acá para ver más información
									</button>
									<img className="vector-1" src={vector2.src} alt="Vector" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<img className="vector-2" src={vector.src} alt="Vector" />
			</div>
		</div>
	)
}
/**
 * @file PlanOnco.jsx
 * @description Componente que contiene la información del plan oncosmart
 * @ComponentNumber CMP020
 */

const PlanOnco = () => {
	const [seleccionado, setSeleccionado] = useState(null)
	const [showModal, setShowModal] = useState(false)

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
		<Primary>
			<Boton
				seleccionado={seleccionado === '1'}
				onClick={() => handleClick('1')}
				setModal={setShowModal}
				modal={showModal}
			></Boton>
			{showModal && (
				<ModalContainer
					title="Beneficios del Plan Oncosmart"
					showModal={showModal}
					setModal={setShowModal}
					funcOnClose={() => setShowModal(false)}
				>

					<PlanOncoSmartInfo />
				</ModalContainer>
			)}
		</Primary>
	)
}

export default PlanOnco

const Primary = styled.div`
  .aditional-plan {
    align-items: flex-start;
    display: flex;
    min-width: 918px;
  }
  .right-colum {
    align-self: stretch;
    height: 159px;
    min-width: 666px;
    position: relative;
  }

  .vector-2 {
    height: 27px;
    left: 694px;
    position: absolute;
    top: 122px;
    width: 27px;
  }
  .line-14 {
    height: 159px;
    min-width: 1px;
    object-fit: cover;
    position: relative;
  }
  .check {
    align-items: center;
    display: flex;
    gap: 8px;
    margin-top: 24px;
    position: relative;
    width: fit-content;
    margin-bottom: 8px;
  }
  .check-1 {
    height: 24px;
    min-width: 24px;
    position: relative;
  }
  .etiqueta-de-monto-1 {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    width: fit-content;
  }
  .group-31 {
    height: 34px;
    margin-right: -2px;
    min-width: 78px;
    position: relative;
  }
  .flex-col-7 {
    display: flex;
    flex-direction: column;
  }
  .flex-col-4 {
    align-items: center;
    left: 16px;
    min-height: 144px;
    position: relative;
    width: 76px;
  }
  .vector-1 {
    align-self: flex-end;
    height: 14px;
    width: 13px;
  }
  .left-colum {
    height: 159px;
    min-width: 108px;
    position: relative;
  }

  .bodybody-large---montserrat-bold1 {
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;
  }
  .agregar-al-plan {
    width: 64px;
    height: 35px;
    left: 22px;
    top: 110px;

    /* Body/Body Small - Montserrat Regular */

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* or 120% */

    display: flex;
    align-items: center;
    text-align: center;

    /* Neutral Gray Colors/Neutral - White */

    color: #ffffff;
  }

  .bodybody-medium---montserrat-regular1 {
    font-family: "Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
  }

  .title-4 {
    width: 65px;
    height: 20px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .bodybody-small---montserrat-medium {
    font-family: "Montserrat", Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
  }
  .x000-21 {
    color: #ffffff;
    font-weight: 600;
    line-height: 33.6px;
    white-space: nowrap;
  }
  .x000-1 {
    width: 76px;
    height: 34px;
    left: 0px;
    top: 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #ffffff;
  }

  .continuar-5 {
  }

  .continuar-1 {
    width: 270px;
    height: 17px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #112145;
  }
  .comp-button-7 {
    align-items: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    width: fit-content;
    &:hover {

background-color: #f2f2f2;

}
  }
  .comp-button-1 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #c0c8c8;
    gap: 8px;
    height: 36px;
    padding: 8px;
    position: relative;
    cursor: pointer;
    //styleName: Body/Body Small - Montserrat Medium;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
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

  .valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bodybody-medium----montserrat-medium {
    font-family: "Montserrat", Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
  }
  .para-todas-aquellas {
    width: 664px;
    height: 45px;
    left: 0px;
    top: 46px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;

    color: #ffffff;
  }

  .headlinesh5---radley-font-bold {
    font-family: var(--font-family-radley);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
  }
  .plan-onco-smart {
    width: 663px;
    height: 42px;
    left: 1px;
    top: 0px;

    font-family: "Radley";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #ffffff;
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
    background: linear-gradient(90deg, #2d4875 33.85%, rgb(0, 175, 161) 100%);

    border-radius: 10px;
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

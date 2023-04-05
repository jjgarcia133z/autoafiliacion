/**
 * @file PlanesGroup.jsx
 * @description Componente que muestra los planes de la empresa
 * @componentNumber CMP06
 *
 */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import icono from '@/assets/img/icon-outlines-29@2x.png'
import PlanButton from './PlanButton'
import { useSelector, useDispatch } from 'react-redux'
import { setTipoPlan } from '@/store/slices/afiliacionSlice'

const planes = [
	{
		nombre: 'Plan Mensual',
		precio_titular: 13.56,
		precio_adicional: 7.78,
		codePlan: 0,
	},
	{
		nombre: 'Plan Trimestral',
		precio_titular: 81.36,
		precio_adicional: 23.78,
		codePlan: 1,
	},
	{
		nombre: 'Plan Semestral',
		precio_titular: 94.4,
		precio_adicional: 35.78,
		codePlan: 2,
	},
	{
		nombre: 'Plan Anual',
		precio_titular: 162.75,
		precio_adicional: 54.43,
		codePlan: 3,
	},
]

const PlanesGroup = ({ defaul = 0 }) => {
	const [seleccionado, setSeleccionado] = useState(null)
	const dispatch = useDispatch()
	const { tipoPlan } = useSelector((state) => state.afiliacion)

	useEffect(() => {
		dispatch(setTipoPlan(tipoPlan))
		setSeleccionado(tipoPlan)
	}, [defaul])

	const handleClick = (valor) => {
		setSeleccionado(valor.codePlan)
		dispatch(setTipoPlan(valor.codePlan))
	}
	return (
		<Primary background={icono}>
			<div className="plan-bar-options-1">
				{planes.map((plan) => (
					<PlanButton
						key={plan.nombre}
						valor={plan.nombre}
						precio_titular={plan.precio_titular}
						precio_adicional={plan.precio_adicional}
						seleccionado={seleccionado === plan.codePlan}
						onClick={() => handleClick(plan)}
					/>
				))}
			</div>
		</Primary>
	)
}
export default PlanesGroup
const Primary = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 66px;
  .selected {
    background-color: blue;
    color: white;
  }
  .contenido-1 {
    height: 43px;
    min-width: 184px;
    position: relative;
  }
  .valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .frame-37381-1 {
    align-self: stretch;
    height: 152px;
    min-width: 216px;
    position: relative;
  }
  .overlineoverline-small-medium---montserrat {
    font-family: "Montserrat", Helvetica;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
  }
  .text-4 {
    color: #ffffff;
    font-weight: 400;
    height: 29px;
    line-height: 28.8px;
    white-space: nowrap;
    width: 145px;
  }
  .text-10 {
    color: #ffffff;
    font-weight: 500;
    height: 18px;
    line-height: 14.4px;
    width: 136px;
  }
  .plan-option-2 {
    gap: 10px;
  }
  .plans-2 {
    height: 152px;
    position: relative;
  }
  .frame-37361-2 {
    border-radius: 10px;

    background-color: #4d638a;
    height: 152px;
    min-width: 216px;
  }
  .plan-option {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 152px;
    position: relative;
    width: 216px;
    border: none;
    border-radius: 10px;
  }
  .headlinesh6 {
    //styleName: Headlines/H6 - Radley Font Bold;
    font-family: Radley;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
  }
  .text-9 {
    color: #ffffff;
    font-weight: 500;
    height: 18px;
    line-height: 14.4px;
  }
  .desde {
    color: #ffffff;
    font-weight: 500;
    height: 18px;
    line-height: 14.4px;
    margin-bottom: 1px;
    width: 39px;
  }

  .line-10-1 {
    align-self: flex-end;
    height: 40px;
    margin-left: 8px;
    object-fit: cover;
    width: 1px;
  }

  .frame-37360-1 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 41px;
    margin-left: 7px;
    width: 129px;
  }
  .icono-de-notificacin-4 {
    background-image: url(${(props) => props.background.src});
    background-size: 100% 100%;
    height: 24px;
    min-width: 24px;
    position: relative;
  }
  .desde-1 {
    color: #ffffff;
    font-weight: 500;
    height: 18px;
    line-height: 14.4px;
    margin-bottom: 1px;
    width: 39px;
  }
  .flex-row-1 {
    align-items: center;
    display: flex;
    min-width: 184px;
  }
  .line-15-1 {
    height: 1px;
    min-width: 184px;
    object-fit: cover;
    position: relative;
  }
  .list-check {
    display: flex;
    gap: 16px;
  }

  .list-check-3 {
    align-items: flex-start;
    height: 24px;
    margin-top: 3px;
    position: relative;
    width: 24px;
  }

  .text-13 {
    color: #ffffff;

    font-weight: 400;
    height: 29px;
    line-height: 28.8px;
    white-space: nowrap;
    width: 145px;
  }
  .titular-3 {
    align-self: stretch;
    gap: 20px;
  }
  .titular {
    display: flex;
    height: 31.42px;
    min-width: 199.33px;
    position: relative;
  }
  .overlap-group-3 {
    height: 152px;
    position: relative;
    width: 216px;
  }
  .plans {
    align-items: flex-start;

    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    width: 216px;
  }
  .fondo-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 0;
    position: absolute;
    top: 0;
    width: fit-content;
  }
  .plans-3 {
    left: 0;
    position: absolute;
    top: 0;
  }
  .frame-37361-3 {
    align-items: flex-start;
    align-self: stretch;
    flex: 1;
    flex-direction: column;
    gap: 10px;
  }
  .frame-37361 {
    display: flex;
    position: relative;
  }
  .plan-bar-options-1 {
    align-items: flex-start;
    display: flex;
    gap: 24px;
    width: fit-content;
  }

  .fondo-3 {
    background: var(--gradient-plan);

    border-radius: 10px;

    height: 152px;
    min-width: 216px;
    position: relative;
  }
`
/////

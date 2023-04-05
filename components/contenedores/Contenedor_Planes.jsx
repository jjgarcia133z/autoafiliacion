/**
 * @file Contenedor_Planes.jsx
 * @description Contenedor de planes de afiliación.
 * @componentNumber CMP09 *
 */
import React from 'react'
import styled from 'styled-components'
import PlanesGroup from '../home/PlanesGroup'
import ImagePortada from '@/assets/img/PortadaAfiliacion_medismart.png'
import Button from '../common/Button'

import usePage from '@/hooks/usePage'
const Contenedor_Planes = () => {
	const { goTo, updateStepStatus } = usePage()
	const handleClick = () => {
		const url = '/datos-personales'
		updateStepStatus(1,url, false)
	}
	return (
		<Container portada={ImagePortada}>
			<span></span>
			<article>
				<h1>Plan Medismart</h1>
				<p>
          Adquirí el mejor plan de medicina prepagada que te aporta beneficios
          en citas y servicios médicos para vos, tus amigos y familiares.
				</p>
			</article>
			<div>
				<PlanesGroup />
				<Row>
					<Button
						text="Continuar"
						style="primaryLarge"
						onClickHandle={handleClick}
					/>
				</Row>
			</div>
		</Container>
	)
}

export default Contenedor_Planes
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 32px 32px 32px;
  margin-bottom: 32px;
  & > span:nth-child(1) {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    z-index: 0;
    background: url(${(props) => props.portada.src});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      z-index: -12;
    }
    height: 388px;
    width: 1328px;
    border-radius: 10px;
  }

  & > article {
    width: 100%;
    margin-bottom: 48px;
    margin-top: calc(227px - 32px);
    position: relative;
    & > h1 {
      font-family: "Radley";
      font-size: 42px;
      font-weight: 400;
      line-height: 50.4px;
      letter-spacing: 0px;
      text-align: left;
      text-transform: uppercase;
      color: var(--primary-blue-primary-blue-900);
      position: relative;
      width: fit-content;
      margin-bottom: 8px;
    }
    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
      max-width: 696px;
      z-index: 1;
      color: var(--primary-blue-primary-blue-900);
    }
  }
  @media (max-width: 1194px) {
    & > span:nth-child(1) {
      position: absolute;
      top: 85px;
      display: flex;
      background: url(${(props) => props.portada.src});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
    }
  }
`

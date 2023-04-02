/**
 * @file PlanOncoSmartInfo.jsx
 * @description Contenido de modal de PlanOncoSmartInfo.
 * @componentNumber CMP00 sin CMP ASIGNADO
 */
import React from 'react'
import styled from 'styled-components'
import { Check } from '../icons/Icons'
import onco from '@/assets/img/onco.png'
const PlanOncoSmartInfo = () => {
	return (
		<OncoSmart>
			<ul>
				<li>
					<span>
						<Check />
					</span>
					<p>
            Agregá el Plan OncoSmart a tu plan médico MediSmart para la
            prevención y tratamiento del cáncer.
					</p>
				</li>
				<li>
					<span>
						<Check />
					</span>
					<p>
            Para todas aquellas personas interesadas en la prevención y
            detección temprana de cáncer.
					</p>
				</li>
				<li>
					<span>
						<Check />
					</span>
					<p>Para pacientes sanos con antecedentes familiares de cáncer.</p>
				</li>
				<li>
					<span>
						<Check />
					</span>
					<p>Para pacientes con cáncer.</p>
				</li>
				<li>
					<span>
						<Check />
					</span>
					<p>Para sobrevivientes de cáncer.</p>
				</li>
			</ul>
			<div>
				<img src={onco.src} alt="onco" />
			</div>
		</OncoSmart>
	)
}

export default PlanOncoSmartInfo

const OncoSmart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 54px;
  & ul {
    display: flex;
    flex-direction: column;
    max-width: 526.63px;
    height: 100%;
    padding: 0;
    margin: 0;
    & li {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      & span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
        margin-right: 16px;
        border: 1px solid var(--primary-blue-primary-blue-200);
        
        & i {
          font-size: 24px;
          color: var(--secundary-accent-secundary-accent-main-500);
          right: 16px;
        }
      }
      & p {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom: 16px;
        max-width: 706px;
        color: var(--primary-blue-primary-blue-main-500);
      }
    }
  }
`

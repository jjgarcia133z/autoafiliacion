import React from 'react'
import styled from 'styled-components'
import CMP025 from '../common/CMP025'
import CMP038 from '../common/CMP038'

const CMP09 = ({ text = '' }) => {
	return (
		<Container>
			<div>
				<h1>Plan Medismart {text}
					<CMP025 />
				</h1>
				<p>
          Adquirí el mejor plan de medicina prepagada que te aporta beneficios
          en citas y servicios médicos para vos, tus amigos y familiares.
				</p>
			</div>
			<div>
				<CMP038 />
			</div>
		</Container>
	)
}

export default CMP09

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #ff000045; */
  padding: 32px;
  & > div {
    width: 100%;
    margin-top: calc(227px - 32px);

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
      background-color: red;
    }
    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
      max-width: 696px;
      color: var(--primary-blue-primary-blue-900);
    }
  }
`

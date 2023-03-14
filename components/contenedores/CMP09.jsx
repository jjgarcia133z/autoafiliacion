import React from 'react'
import styled from 'styled-components'
import CMP022 from '../CMP022'
import CMP024 from '../CMP024'
import DogHead from '../icons/DogHead'

const CMP09 = ({text=''}) => {
	return (
		<Container>
			<div>
				<h1>Plan Medismart {text}</h1>
				<p>
          Adquirí el mejor plan de medicina prepagada que te aporta beneficios
          en citas y servicios médicos para vos, tus amigos y familiares.
				</p>
			</div>
			<div>
				<CMP024 />
				{/* <CMP022 /> */}
				{/* <DogHead /> */}

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
	  color: var(--primary-blue-primary-blue-900)
    }
    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
	  max-width: 696px;
	  color: var(--primary-blue-primary-blue-900)
    }
  }
`

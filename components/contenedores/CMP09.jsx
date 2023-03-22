import React from 'react'
import styled from 'styled-components'
import CMP011_5 from '../common/CMP011_5'
import CMP012 from '../common/CMP012'
import CMP025 from '../common/CMP025'

const CMP09 = ({ text = '' }) => {
	const [show, setShow] = React.useState(false)
	const showTooltip = (state) => {
		console.log(state)
		setShow(() => state)
	}
	return (
		<Container>
			<div>
				<h1
					// onMouseEnter={() => showTooltip(true)}
					// onMouseLeave={() => showTooltip(false)}
				>
          Plan Medismart {text}
					<CMP025 show={show} />
				</h1>
				<p>
          Adquirí el mejor plan de medicina prepagada que te aporta beneficios
          en citas y servicios médicos para vos, tus amigos y familiares.
				</p>
			</div>
			<div>
				<div>
					

				</div>
				<div style={{display: 'flex', gap: '20px'}}>
          
					<CMP012 price="14.35" title="Persona" description="Afiliá un amigo o familiar, para que tenga tus mismos beneficios" />
				
					<CMP012 price="9.35" title="Mascotas" description="Afiliá a tu perro o gato y aprovechá beneficios para cuidar de su salud."  type="perro" />
				</div>

				{/* <CMP024 /> */}
				{/* <CMP015 /> */}
				{/* <CMP038 /> */}
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
    margin-bottom: 32px;
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

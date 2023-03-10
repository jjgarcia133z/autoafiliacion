import React from 'react'
import styled from 'styled-components'
import CMP05 from './CMP05'

const TopMenu = () => {
  

	return (
		<TopContainer id='AAA'>
			<CMP05 />
			<TitleContainer TitleContainer="content-2 content-3">
				<h1>Paso 1</h1>
				<p>¡Elegí el plan que se adapte mejor a tus necesidades!</p>
			</TitleContainer>
		</TopContainer>
	)
}

export default TopMenu

const TopContainer = styled.div`
`
const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: max-content;
width: 100%;
background: #2d4875;
border-radius: 10px 60px 0px 10px;
color: #ffffff;
& > h1 {
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 16px;
}
& > p {
  /* Body/Body Medium - Montserrat Regular */
  font-family: Montserrat;
  font-style:normal;
  font-weight: 400;
  font-size: 16px;
  /* se quita line-height: 19p.2x; */
}
`
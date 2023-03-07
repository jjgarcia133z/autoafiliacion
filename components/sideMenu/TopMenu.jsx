import React from 'react'
import styled from 'styled-components'
import CMP05 from './CMP05'

const TopMenu = () => {
  

	return (
    <>
		<div className="text-4">
			<CMP05 />
			<TitleContainer TitleContainer="content-2 content-3">
				<h1>Paso 1</h1>
				<p>¡Elegí el plan que se adapte mejor a tus necesidades!</p>
			</TitleContainer>
		</div>
    <style></style>
    </>
	)
}

export default TopMenu

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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 16px;
}
& > p {
  /* Body/Body Medium - Montserrat Regular */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 16px;
}
`
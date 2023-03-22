import React from 'react'
import styled from 'styled-components'
import CMP015 from './CMP015'
import CMP016 from './CMP016'
import CardBackground from '@/assets/img/cardBackground.png'
import CardGirl from '@/assets/img/cardGirl.png'
import CardDog from '@/assets/img/cardDog.png'

const CMP012 = ({
	type = 'persona',
	title = 'title',
	description = 'description',
	price = '0.00',
}) => {
	return (
		<CardContainer
			CardBackground={CardBackground.src}
			CardGirl={CardGirl.src}
			CardDog={CardDog.src}
			type={type}
		>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<CMP015 />
			</div>
			<div>
				<CMP016 price={price} />
			</div>
		</CardContainer>
	)
}

export default CMP012

const CardContainer = styled.div`
  width: 428px;
  height: 335px;
  background-image: url(${(props) => props.CardBackground});
  border-radius: 10px;
  padding: 24px 0 0 24px;
  position: relative;
  & > div:nth-child(1) {
    font-family: Montserrat;
    & > h2 {
      //styleName: Body/Body Large - Montserrat Medium;
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 16px;
    }
    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      width: 219px;
      height: 97px;
    }
    margin-bottom: 32px;
  }
  & > div:nth-child(2) {
    //styleName: Body/Body Medium - Montserrat Regular;
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) =>props.type === 'persona' ? props.CardGirl : props.CardDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
    border-radius: 10px;
    pointer-events: none;
  }
`

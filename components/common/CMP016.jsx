import React from 'react'
import styled from 'styled-components'

const CMP016 = ({price}) => {
	return (
		<PriceContainer>
			<span>Desde</span>
			<span>${price}</span>
			<span>por mes</span>
		</PriceContainer>
	)
}

export default CMP016

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: var(--primary-blue-primary-blue-900-transparent);
  font-family: Montserrat;
  height: 96px;
  width: 120px;
  border-radius: 10px 0px;
  color: var(--neutral-gray-colors-neutral-white);
  padding: 14px 16px 16px 16px;
  z-index: 2;
  & > span:nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
  & > span:nth-child(2) {
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }
  & > span:nth-child(3) {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: 0px;
    text-align: left;
  }
`

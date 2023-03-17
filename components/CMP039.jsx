import React from 'react'
import styled from 'styled-components'

const CMP039 = () => {
	return (
		<TootipContainer>
			<span>Total de ahorro</span>
			<span>$35
			</span>
		</TootipContainer>
	)
}

export default CMP039

const TootipContainer = styled.div`
  height: 35px;
  width: 206px;
  border-radius: 60px;
  background-color: var(--primary-blue-primary-blue-900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 8px;
  //styleName: Body/Body Small - Montserrat Medium;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: right;
  gap: 8px;

  & > span:first-of-type {
    color: var(--neutral-gray-colors-neutral-white);
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    text-transform: initial;
  }
  & > span:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
    width: 75px;
    padding: 4px;
    border-radius: 60px;
    //styleName: Body/Body Medium - Montserrat Bold;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;

    color: var(--primary-blue-primary-blue-900);
    background-color: var(--neutral-gray-colors-neutral-white);
  }
`

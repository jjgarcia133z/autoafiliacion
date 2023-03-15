import React from 'react'
import styled from 'styled-components'

const CMP018 = ({ parentPage = '', currentPage = '' }) => {
	return (
		<BreadCrumbContainer>
			<span>{parentPage} </span>/<span> {currentPage}</span>
		</BreadCrumbContainer>
	)
}

export default CMP018

const BreadCrumbContainer = styled.div`
  & > span:nth-child(1) {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;

    color: var(--neutral-gray-colors-neutral-dark-light-grey);
  }
  & > span:nth-child(2) {
    //styleName: Body/Body Medium  - Montserrat Medium;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--primary-blue-primary-blue-900);
  }
`

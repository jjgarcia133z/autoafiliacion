/**
 * @file ContenedoresHeader.jsx
 * @description ContenedoresHeader component.
 * @componentNumber CMP044
 */
import React from 'react'
import styled from 'styled-components'

const ContenedoresHeader = ({ title = 'title' }) => {
	return <Title>{title}</Title>
}

export default ContenedoresHeader

const Title = styled.h1`
  //styleName: Headlines/H3 - Radley Font Bold;
  font-family: Radley;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;

    color: var(--primary-blue-primary-blue-900);
`

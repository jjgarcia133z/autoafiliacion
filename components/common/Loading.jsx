import React from 'react'
import styled from 'styled-components'

const Loading = ({contrast}) => {
	return (
		<LoadingContainer className="loading">
			<span></span>
			<span></span>
			<span></span>
		</LoadingContainer>
	)
}

export default Loading

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
        display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    animation: loading 1.2s ease infinite;
    
    }

    & > span:nth-child(1) {
        animation-delay: 0.4s;
        
    }

    & > span:nth-child(2) {
        animation-delay: 0.8s;
    }

    & > span:nth-child(3) {
        animation-delay: 1.2s;
    }


  @keyframes loading {
    0% {
      transform: scale(1);
      background-color: #eee;
    }
    20% {
      transform: scale(1);
      background-color: var(--primary-blue-primary-blue-900);
    }
    30% {
      transform: scale(1);
      background-color: var(--primary-blue-primary-blue-900);
    }
    70% {
      transform: scale(1);
      background-color: #eeee;
    }
    100% {
      transform: scale(1);
      background-color: #eeee;
    }
  }
`

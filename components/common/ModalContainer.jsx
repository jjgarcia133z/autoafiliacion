/**
 * @file ModalContainer.jsx
 * @description Contenedor de modal.
 * @componentNumber CMP026
 */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'

const ModalContainer = ({
	title = '',
	setModal,
	funcOnClose = null,
	children,
}) => {
	//modal state for closing the modal

	const handleClick = () => {
		setModal(false)
		if (funcOnClose) funcOnClose()
	}

	const modalRoot = document.getElementById('__next')
	const el = document.createElement('div')

	useEffect(() => {
		modalRoot.appendChild(el)
		return () => {
			modalRoot.removeChild(el)
			
		}
	}, [el, modalRoot])

	return createPortal(
		<BackGroundModal>
			<div>
				<div>
					<h2>{title}</h2>
					<button onClick={() => handleClick()}>
						<FiX />
					</button>
				</div>
				<section>{children}</section>
			</div>
		</BackGroundModal>,
		el
	)
}

export default ModalContainer

const BackGroundModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%; /* ubicar en el centro verticalmente */
  left: 50%; /* ubicar en el centro horizontalmente */
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: var(--transparent-white);
  box-sizing: border-box;
  & > div:first-of-type {
    padding: 46px;
    background-color: var(--neutral-gray-colors-neutral-white);
    border-radius: 10px;
    border: 1px solid var(--neutral-gray-colors-neutral-medium-grey);
    box-shadow: var(--leftbottom-shadow);
    & > div:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      position: relative;
      & > h2 {
        //styleName: Headlines/H3 - Radley Font Bold;
        font-family: Radley;
        font-size: 40px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0px;
        text-align: left;
        min-width: 674px;
        color: var(--primary-blue-primary-blue-900);
      }
      & > button {
        background: none;
        border: none;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: var(--primary-green-primary-green-main-500);
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        & > svg {
          height: calc(18px + calc(24px - 18px));
          width: calc(18px + calc(24px - 18px));
        }
      }
    }
  }
`

/**
 * @file Tooltip.jsx
 * @description Tooltip.
 * @componentNumber CMP025
 */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { position } from '@/constants/constants'
import { selectTooltipPosition, selectIndicatorPosition } from '@/utils/utils'
import { XElement } from '../icons/Icons'
import indicator from '@/assets/img/icons/indicator.png'
const Tooltip = ({
	tipPosition = position.topMid,
	indicatorPosition = position.bottomMid,
	width = '205px',
	separation = '12',
	text = 'Acá podés ver el ahorro que tendrás al pasarte a otro periódo de pago a partir del trimestral.',
	show = false,
	arrowConerGap = 35,
	indicatorrGap: indicatorGap = 0,
	showClose = true,
}) => {
	console.log(indicator)
	const ref = useRef(null)
	const [tooltipMesure, setTooltipMesure] = useState(0)
	const indicatorMesure = { width: 10, height: 9}
	useEffect(() => {
		setTooltipMesure((prev) => {
			prev = {
				height: ref.current.offsetHeight,
				width: ref.current.offsetWidth,
				parentHeight: ref.current.parentElement.offsetHeight,
				parentWidth: ref.current.parentElement.offsetWidth,
			}
			return prev
		})
	}, [show])

	return (
		<TootipContainer
			show={show}
			indicator={indicator.src}
			ref={ref}
			width={width}
			indicatorWidth={indicatorMesure.width}
			indicatorHeight={indicatorMesure.height}
			position={selectTooltipPosition(
				tipPosition,
				arrowConerGap,
				tooltipMesure.height,
				tooltipMesure.width,
				tooltipMesure.parentHeight,
				tooltipMesure.parentWidth,
				separation,
				{},
				arrowConerGap
			)}
			indicatorPosition={selectIndicatorPosition(
				tooltipMesure.width,
				tooltipMesure.height,
				indicatorPosition,
				indicatorGap,
				indicatorMesure.width,
				indicatorMesure.height

			)}
			arrowConerGap={arrowConerGap}
		>
			<div>{text}</div>
			{showClose && (
				<button>
					<XElement />
				</button>
			)}
		</TootipContainer>
	)
}

export default Tooltip

const TootipContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  background-color: var(--primary-blue-primary-blue-900);
  border-radius: 10px;
  width: ${(props) => props.width};
  ${(props) => props.position}
  border-radius: 10px;
  padding: 16px 16px 32px 16px;
  box-shadow: var(--tooltip-shadow);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--neutral-gray-colors-neutral-white);
  text-transform: initial;
  animation: fadeIn 0.3s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: ${(props) => props.indicatorWidth}px;
	height: ${(props) => props.indicatorHeight}px;
    margin-right: 10px;
    bottom: -9px;
    background-size: 100% 100%;
    background-image: url(${(props) => props.indicator});
    ${(props) => props.indicatorPosition}
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -16px;
    right: 7px;
    background-color: var(--primary-green-primary-green-main-500);
    border: none;
    color: var(--neutral-gray-colors-neutral-white);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    & > i {
      font-size: 22px;
    }
  }

  @keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
`

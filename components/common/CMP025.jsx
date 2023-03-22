import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { position } from '@/constants/constants'
import { selectTooltipPosition } from '@/utils/utils'
import { XElement } from '../icons/Icons'
import indicator from '@/assets/img/icons/indicator.png'
const CMP025 = ({
	tipPosition = position.topMid,
	arrowPosition = position.bottomMid,
	tooltipWidth = '205px',
	separation = '12',
	text = 'Acá podés ver el ahorro que tendrás al pasarte a otro periódo de pago a partir del trimestral.',
	show = false,
}) => {
	const ref = useRef(null)
	const [tooltipMesure, setTooltipMesure] = useState(0)
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
			width={tooltipWidth}
			position={selectTooltipPosition(
				tipPosition,
				tooltipMesure.height,
				tooltipMesure.width,
				tooltipMesure.parentHeight,
				tooltipMesure.parentWidth,
				separation
			)}
			arrowPosition={arrowPosition}
		>
			<div>
				{text}
			</div>
			<button>
				<XElement />
			</button>
		</TootipContainer>
	)
}

export default CMP025

const TootipContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  background-color: var(--primary-blue-primary-blue-900);
  border-radius: 10px;
  width: ${(props) => props.width};
  ${(props) => props.position}
  border-radius: 10px;
  padding: 16px;

  //styleName: Body/Body Small - Montserrat Medium;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--neutral-gray-colors-neutral-white);
  text-transform: initial;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 9px;
    margin-right: 10px;
    bottom: -9px;
    left: calc(50% - 5px);
    background-size: 100% 100%;
    background-image: url(${(props) => props.indicator});
    ${(props) =>
		selectTooltipPosition(props.arrowPosition, 10, 0, 0, 0, 0, {
			margin: 10,
		})};
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
`

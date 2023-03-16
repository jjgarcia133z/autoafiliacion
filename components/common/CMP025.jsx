import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { position } from '@/constants/constants'
import { selectTooltipPosition } from '@/utils/utils'
const CMP025 = ({
	tipPosition = position.rightMid,
	arrowPosition = position.mid,
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
			console.log(prev)
			return prev
		})
	}, [])

	return (
		<TootipContainer
			ref={ref}
			width="205px"
			position={selectTooltipPosition(
				tipPosition,
				tooltipMesure.height,
				tooltipMesure.width,
				tooltipMesure.parentHeight,
				tooltipMesure.parentWidth,
			)}
		>
      Acá podés ver el ahorro que tendrás al pasarte a otro periódo de pago a
      partir del trimestral.
		</TootipContainer>
	)
}

export default CMP025

const TootipContainer = styled.div`
  position: absolute;
  display: flex;
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
`

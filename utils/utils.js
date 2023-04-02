import { position } from '@/constants/constants'
const selectTooltipPosition = (
	tipPosition,
	arrowConerGap = 35,
	height,
	width,
	parentHeight,
	parentWidth,
	separation = 15,
	pseudoElement = {}
) => {
	//Si la separación es un string, lo convertimos a número
	if (typeof separation === 'string' && separation.endsWith('px')) {
		separation = Number(separation.replace('px', ''), 10)
	} else if (typeof separation === 'string') {
		separation = Number(separation, 10)
	}

	tipPosition = tipPosition == position.top ? position.topMid : tipPosition
	tipPosition =
    tipPosition == position.bottom ? position.bottomMid : tipPosition
	tipPosition = tipPosition == position.left ? position.leftMid : tipPosition
	tipPosition = tipPosition == position.right ? position.rightMid : tipPosition
	const pseudoElementMargin = pseudoElement.margin ? true : false

	if (!pseudoElementMargin) {
		switch (tipPosition) {
		case position.topMid:
			return `
                top: ${(height + separation) * -1}px;
                left: ${parentWidth / 2 - width / 2}px;
                
            `
		case position.topRight:
			return `
                top: ${(height + separation) * -1}px;
                right: -${width - arrowConerGap}px;
            `
		case position.topLeft:
			return `
                top: ${(height + separation) * -1}px;
                left: -${width - arrowConerGap}px;
            `
		case position.bottomMid:
			return `
                bottom: ${(height + separation) * -1}px;
                left: ${parentWidth / 2 - width / 2}px;
            `
		case position.bottomRight:
			return `
                bottom: ${(height + separation) * -1}px;
                right: -${width - arrowConerGap}px;
            `
		case position.bottomLeft:
			return `
                bottom: ${(height + separation) * -1}px;
                left: -${width - arrowConerGap}px;
            `
		case position.leftMid:
			return `
                left: ${(width + separation) * -1}px;
                top:-${height / 2 - parentHeight / 2}px;
            `
		case position.leftTop:
			return `
                left: ${(width + separation) * -1}px;
                top: -${height - arrowConerGap}px;
            `
		case position.leftBottom:
			return `
                left: ${(width + separation) * -1}px;
                bottom: -${height - arrowConerGap}px;
            `
		case position.rightMid:
			return `
                right: ${(width + separation) * -1}px;
                top:-${height / 2 - parentHeight / 2}px;
            `
		case position.rightTop:
			return `
                right: ${(width + separation) * -1}px;
                top: -${height - arrowConerGap}px;
            `
		case position.rightBottom:
			return `
                right: ${(width + separation) * -1}px;
                bottom: -${height - arrowConerGap}px;
            `
		case position.center:
			return `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `
		default:
			return `
                top: 0;
                left: 0;
            `
		}
	} else {
		arrowConerGap = 0
	}
}

const selectIndicatorPosition = (
	widthTooltip,
	heightTooltip,
	posicion,
	indicatorGap,
	indicatorWidth,
	indicatorheight
) => {
	console.log({ widthTooltip, heightTooltip, posicion, indicatorWidth })
	switch (posicion) {
	case position.topMid:
		return `
			left: ${widthTooltip / 2 - indicatorWidth / 2}px;
			bottom: ${heightTooltip}px;
			transform: rotate(180deg);
		`
	case position.topRight:
		return `
		right: ${indicatorGap / 2}px;
		bottom: ${heightTooltip}px;
		transform: rotate(180deg);		
		`
	case position.topLeft:
		return `
		left: ${indicatorGap / 1.5}px;
		bottom: ${heightTooltip}px;
		transform: rotate(180deg);
		`
	case position.bottomMid:
		return `
		right: ${widthTooltip / 2 - indicatorWidth / 2}px;
		top: ${heightTooltip}px;
		margin : 0;
		`
	case position.bottomRight:
		return `
		right: ${indicatorGap / 2}px;
		top: ${heightTooltip}px;
		`
	case position.bottomLeft:
		return `
		left: ${indicatorGap / 1.5}px;
		top: ${heightTooltip}px;
		`
	case position.leftMid:
		return `
		top: ${heightTooltip / 2 - indicatorheight / 2}px;
		left: ${1 - indicatorWidth}px;
		transform: rotate(90deg);
		`
	case position.leftTop:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	case position.leftBottom:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	case position.rightMid:
		return `
		top: ${heightTooltip / 2 - indicatorheight / 2}px;
		left: ${widthTooltip - 1}px;
		transform: rotate(-90deg);
		`
	case position.rightTop:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	case position.rightBottom:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	case position.center:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	default:
		return `
		left: ${widthTooltip / 2 - indicatorGap}px;
		top: ${heightTooltip}px;
		`
	}
}
export { selectTooltipPosition, selectIndicatorPosition }

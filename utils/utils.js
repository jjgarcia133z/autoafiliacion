import { position } from '@/constants/constants'
const selectTooltipPosition = (
	tipPosition,
	height,
	width,
	parentHeight,
	parentWidth,
	separation = 15,
	pseudoElement = {

	}
) => {
	let arrowConerGap = 35
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

export { selectTooltipPosition }

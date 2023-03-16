import { position } from '@/constants/constants'
const selectTooltipPosition = (
	tipPosition,
	height,
	width,
	parentHeight,
	parentWidth
) => {
	switch (tipPosition) {
	case position.topMid:
		return `
                top: ${(height + 15) * -1}px;
                transform: translateX(calc(50% + ${width / 2 / 2}px));
            `
	case position.topRight:
		return `
                top: ${(height + 15) * -1}px;
                right: -${width / 2 / 0.65}px;
            `
	case position.topLeft:
		return `
                top: ${(height + 15) * -1}px;
                left: -${width / 2 / 0.6}px;
            `
	case position.bottomMid:
		return `
                bottom: ${(height + 15) * -1}px;
                transform: translateX(calc(50% + ${width / 2 / 2}px));
            `
	case position.bottomRight:
		return `
                bottom: ${(height + 15) * -1}px;
                right: -${width / 2 / 0.65}px;
            `
	case position.bottomLeft:
		return `
                bottom: ${(height + 15) * -1}px;
                left: -${width / 2 / 0.5}px;
            `
	case position.leftMid:
		return `
                left: ${(width + 15) * -1}px;
                top: -${(height / 2) * 0.7}px; 
            `
	case position.leftTop:
		return `
                left: ${(width + 15) * -1}px;
                top:  -${height - 20}px;
            `
	case position.leftBottom:
		return `
                left: ${(width + 15) * -1}px;
                bottom:  -${height - 20}px;
            `
	case position.rightMid:
		return `
                right: ${(width + 15) * -1}px;
                top:-${(height / 2) - (parentHeight / 2)}px;
            `
	case position.rightTop:
		return `
                right: ${(width + 15) * -1}px;
                top:  -${height - 20}px;
            `
	case position.rightBottom:
		return `
                right: ${(width + 15) * -1}px;
                bottom:  -${height - 20}px;
            `
	case position.center:
		return `
                top: 0;
                left: 0;
                transform: translate(-50%, -50%);
            `
	default:
		return `
                top: 0;
                left: 0;
            `
	}
}

export { selectTooltipPosition }

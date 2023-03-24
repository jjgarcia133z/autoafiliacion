import React from 'react'

const Flag = ({ width = 24, height = 24, src}) => {
	return (
		<img height={height} width={width} src={src}  />
	)
}

export default Flag

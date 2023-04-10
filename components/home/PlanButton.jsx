import React, { useState } from 'react'
import styled from 'styled-components'
import line15 from '@/assets/img/line-15-4@2x.png'
import line10 from '@/assets/img/line-10-4@2x.png'

const PlanButton = ({
	valor,
	precio_titular,
	precio_adicional,
	seleccionado,
	onClick,
}) => {
	return (
		<button onClick={onClick} className="plan-option">
			<div className="frame-37361-3 frame-37361">
				<div className={seleccionado ? 'frame-373s61-2' : 'frame-37361-2'}>
					<div className="overlap-group-3">
						<div className="fondo-2">
							<div>
								<div className={seleccionado ? 'fondo-3' : 'white'}></div>
							</div>
						</div>
						<div className="plans-3 plans">
							<div className="titular-3 titular">
								<div className="text-4 headlinesh6">{valor}</div>
								<div className="list-check-3 list-check">
									<div
										className={
											seleccionado ? 'icono-de-notificacin-4' : 'white'
										}
									></div>
								</div>
							</div>
							<img className="line-15-1" src={line15.src} alt="Line 15" />
							<div className="contenido-1">
								<div className="flex-row-1 overlineoverline-small-medium---montserrat">
									<div className="desde-1 valign-text-middle">Desde</div>
									<img className="line-10-1" src={line10.src} alt="Line 10" />
									<div className="frame-37360-1">
										<div className="text-9">${precio_titular} por titular</div>
										<div className="text-9">
                      ${precio_adicional} i.v.i por adicional
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</button>
	)
}
export default PlanButton

import React from 'react'
import styled from 'styled-components'
import line15 from '@/assets/img/line-15-4@2x.png'
import line10  from '@/assets/img/line-10-4@2x.png'
import icono from '@/assets/img/icon-outlines-29@2x.png'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP06 = () => {
	return (
		<Primary background={icono}>
			<div className="plan-bar-options-1">
			
				<article className="plan-option">
					<div className="frame-37361-3 frame-37361">
						<div className="frame-37381-1">
							<div className="overlap-group-3">
								<div className="fondo-2">
									<set1>
										<div className="fondo-3"></div>
									</set1>
								</div>
								<div className="plans-3 plans">
									<div className="titular-3 titular">
										<div className="text-4 headlinesh6">Plan Mensual</div>										
										<div className="list-check-3 list-check">
											<div className="icono-de-notificacin-4"></div>
										</div>
									</div>
									<img className="line-15-1" src={line15.src} alt="Line 15" />
									<div className="contenido-1">
										<div className="flex-row-1 overlineoverline-small-medium---montserrat">
											<div className="desde-1 valign-text-middle">Desde</div>
											<img className="line-10-1" src={line10.src} alt="Line 10" />
											<div className="frame-37360-1">
												<div className="text-9">$ 13.56 por titular</div>
												<div className="text-9">$ 6,78 por adicional</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article className="plan-option-2 plan-option">
					<div className="frame-37361-2 frame-37361">
						<div className="plans-2 plans">
							<div className="titular"><div className="text-13 headlinesh6">Plan Trimestral</div></div>
							<img className="line-15-1" src={line10.src} alt="Line 15" />
							<div className="contenido-1">
								<div className="flex-row-1 overlineoverline-small-medium---montserrat">
									<div className="desde-1 valign-text-middle">Desde</div>
									<img className="line-10-1" src={line15.src} alt="Line 10" />
									<div className="frame-37360-1">
										<div className="text-10">$ 40.68 por titular</div>
										<div className="text-10">$ 20.34 por adicional</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article className="plan-option-2 plan-option">
					<div className="frame-37361-2 frame-37361">
						<div className="plans-2 plans">
							<div className="titular"><div className="text-13 headlinesh6">Plan Semestral</div></div>
							<img className="line-15-1" src={line10.src} alt="Line 15" />
							<div className="contenido-1">
								<div className="flex-row-1 overlineoverline-small-medium---montserrat">
									<div className="desde-1 valign-text-middle">Desde</div>
									<img className="line-10-1" src={line15.src} alt="Line 10" />
									<div className="frame-37360-1">
										<div className="text-10">$ 81.36 por titular</div>
										<div className="text-10">$ 40.68 por adicional</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article className="plan-option-2 plan-option">
					<div className="frame-37361-2 frame-37361">
						<div className="plans-2 plans">
							<div className="titular"><div className="text-13 headlinesh6">Plan Anual</div></div>
							<img className="line-15-1" src={line10.src} alt="Line 15" />
							<div className="contenido-1">
								<div className="flex-row-1 overlineoverline-small-medium---montserrat">
									<div className="desde-1 valign-text-middle">Desde</div>
									<img className="line-10-1" src={line15.src}alt="Line 10" />
									<div className="frame-37360-1">
										<div className="text-10">$ 162.72 por titular</div>
										<div className="text-10">$ 81.36 por adicional</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>







			
			</div>
      
		</Primary>
	)
}

export default CMP06


const Primary = styled.div`
.contenido-1 {
  height: 43px;
  min-width: 184px;
  position: relative;
}
.valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.frame-37381-1 {
    align-self: stretch;
    height: 152px;
    min-width: 216px;
    position: relative;
}
.overlineoverline-small-medium---montserrat {
    font-family: "Montserrat", Helvetica;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
}
.text-4{

	color: #ffffff;    font-weight: 400;
    height: 29px;
    line-height: 28.8px;
    white-space: nowrap;
    width: 145px;

}
.text-10 {
  color: #ffffff;
  font-weight: 500;
  height: 18px;
  line-height: 14.4px;
  width: 136px;
}
.plan-option-2 {
  gap: 10px;
}
.plans-2 {
  height: 152px;
  position: relative;
}
.frame-37361-2 {
  background-color: #4d638a;
  border-radius: 10px;
  height: 152px;
  min-width: 216px;
}
.plan-option {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 152px;
  position: relative;
  width: 216px;
}
.headlinesh6{
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
.text-9 {
  color: #ffffff;
  font-weight: 500;
  height: 18px;
  line-height: 14.4px;
}
.desde {
	color: #ffffff;
  font-weight: 500;
  height: 18px;
  line-height: 14.4px;
  margin-bottom: 1.0px;
  width: 39px;
}

.line-10-1 {
  align-self: flex-end;
  height: 40px;
  margin-left: 8px;
  object-fit: cover;
  width: 1px;
}

.frame-37360-1 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 41px;
  margin-left: 7px;
  width: 129px;
}
.icono-de-notificacin-4 {
  background-image:url(${(props) => props.background.src});
  background-size: 100% 100%;
  height: 24px;
  min-width: 24px;
  position: relative;
}
.desde-1 {
	color: #ffffff;
	  font-weight: 500;
  height: 18px;
  line-height: 14.4px;
  margin-bottom: 1.0px;
  width: 39px;
}
.flex-row-1 {
  align-items: center;
  display: flex;
  min-width: 184px;
}
.line-15-1 {
  height: 1px;
  min-width: 184px;
  object-fit: cover;
  position: relative;
}
.list-check {
  display: flex;
  gap: 16px;
}


.list-check-3 {
  align-items: flex-start;
  height: 24px;
  margin-top: 3px;
  position: relative;
  width: 24px;
}



.text-13 {
	color: #ffffff;

 
  font-weight: 400;
  height: 29px;
  line-height: 28.8px;
  white-space: nowrap;
  width: 145px;


}
.titular-3 {
  align-self: stretch;
  gap: 20px;
}
.titular {
  display: flex;
  height: 31.42px;
  min-width: 199.33px;
  position: relative;
}
.overlap-group-3 {
  height: 152px;
  position: relative;
  width: 216px;
}
.plans {
  align-items: flex-start;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  width: 216px;
}
.fondo-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: fit-content;
}
.plans-3 {
  left: 0;
  position: absolute;
  top: 0;
}
.frame-37361-3 {
  align-items: flex-start;
  align-self: stretch;
  flex: 1;
  flex-direction: column;
  gap: 10px;
}
.frame-37361 {
  display: flex;
  position: relative;
}
.plan-bar-options-1{

	align-items: flex-start;
  display: flex;
  gap: 24px;
  left: 348px;
  position: absolute;
  top: 316px;
  width: fit-content;
}


.fondo-3{
  background: linear-gradient(180deg, rgb(45, 72, 117) 3.12%, rgb(0, 175, 161) 100%);
  border: 1px solid;
  border-color: var(--secundary-accentsecundary---accent---main-500);
  border-radius: 5px;
  height: 152px;
  min-width: 216px;
  position: relative;
}
`
/////
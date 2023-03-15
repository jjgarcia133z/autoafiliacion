import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CMP024ROW from './CMP024ROW'

const CMP024 = () => {
	const { planMedismart, beneficiarios, mascotas, productosAdicionales } =
    useSelector((state) => state.afiliacion)
	return (
		<RowGroup>
			<div>
				<div>
					<p>Propietario</p>
				</div>
				<CMP024ROW
					isOwnPlan={true}
					name={planMedismart.nombre}
					benficiario={'Propietario'}
					typePlan="Propietario"
				/>
			</div>
			<div>
				<div>
					<p>Beneficiarios</p>
				</div>
				{beneficiarios.map((beneficiario, index) => (
					<CMP024ROW
						key={index}
						isOwnPlan={false}
						name={beneficiario.nombre}
						benficiario={beneficiario.parentesco}
						typePlan={'Persona'}
					/>
				))}
			</div>
			<div>
				<div>
					<p>Mascotas</p>
				</div>
				{mascotas.map((mascota, index) => (
					<CMP024ROW
						key={index}
						isOwnPlan={false}
						name={mascota.nombre}
						benficiario={mascota.tipoMascota}
						typePlan={'Mascota'}
					/>
				))}
			</div>
			<div>
				<div>
					<p>Productos adicionales</p>
				</div>
				{productosAdicionales.map((productosAdicionale, index) => (
					<CMP024ROW
						key={index}
						isOwnPlan={false}
						name={productosAdicionale.nombre}
						typePlan={'Producto'}
						benficiario={productosAdicionale.beneficiario}
					/>
				))}
			</div>
		</RowGroup>
	)
}

export default CMP024

const RowGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 918px;
  height: 100%;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    & > div:first-of-type {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 16px 0%;
      text-align: left;
      & p {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        width: 100%;

      }
    }
  }
`

/**
 * @file RowGroup.jsx
 * @description Row de grupo de beneficiarios.
 * @componentNumber CMP024
 */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import RowBeneficiario from './RowBeneficiario'

const RowGroup = () => {
	const { planMedismart, beneficiarios, mascotas, productosAdicionales } =
    useSelector((state) => state.afiliacion)
	return (
		<RowGroupContainer>
			<div>
				<div>
					<p>Propietario</p>
					<p>Monto</p>
				</div>
				<RowBeneficiario
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
					<RowBeneficiario
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
					<RowBeneficiario
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
					<RowBeneficiario
						key={index}
						isOwnPlan={false}
						name={productosAdicionale.nombre}
						typePlan={'Producto'}
						benficiario={productosAdicionale.beneficiario}						
					/>
				))}
			</div>
		</RowGroupContainer>
	)
}

export default RowGroup

const RowGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  width: 100%;
  height: 100%;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    & > div:first-of-type {
      display: grid;
      grid-template-columns: 3fr 1fr 230px;
      grid-template-rows: 1fr;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 16px 48px 16px 0;
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
	  & p:nth-of-type(2) {
		text-align: right;
		padding-right: 24px;

	  }
    }
  }
`

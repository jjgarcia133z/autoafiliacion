import React from 'react'
import styled from 'styled-components'
import CMP038 from '../common/CMP038'
import CMP044 from '../common/CMP044'
import CMP037 from '../home/CMP037'
import CMP08 from '../home/CMP08'
import CMP010 from '../home/CMP010'
import Loading from '../common/Loading'

const CMP011 = () => {
	return (
		<Container>
			<div>
				<CMP044 title="Ingresá los datos de la mascota" />
			</div>

			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Tipo de mascota"
					placeholder="Seleccioná el tipo de mascota"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Nombre de la mascota"
					placeholder="Ingresá el nombre de la mascota"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Color"
					placeholder="Ingresá el color"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Raza"
					placeholder="Ingresá la Raza"
				/>
			
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Fecha de nacimiento"
					placeholder="Ingresá la fecha de nacimiento"
				/>
				<CMP037
					type="text"
					mandatory={true}
					label="Edad"
					placeholder=""
				/>
			</Row>
			<Row>
				<CMP038
					type="text"
					mandatory={true}
					label="Sexo"
					placeholder="Seleccioná el sexo del animal"
				/>
			
			</Row>
			
			
			
			
			
			<Row>
				<CMP010 text="Atrás" />
				<CMP08 text="Continuar" />
				<Loading />
			</Row>
		</Container>
	)
}

export default CMP011
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  & > div:first-of-type {
    margin-bottom: 32px;
  }
  & > div h2 {
    margin-top: 22px;
    //styleName: Body/Body Large - Montserrat Bold;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }
`

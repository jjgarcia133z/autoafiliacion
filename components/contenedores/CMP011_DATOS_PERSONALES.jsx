import React from 'react'
import styled from 'styled-components'
import CMP011_5 from '../common/CMP011_5'
import CMP038 from '../common/CMP038'
import CMP044 from '../common/CMP044'
import CMP020 from '../home/CMP020'
import CMP037 from '../home/CMP037'
import CMP040 from '../home/CMP040'
import CMP07 from '../home/CMP07'
import CMP08 from '../home/CMP08'
import CMP010 from '../home/CMP010'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'

const CMP011 = () => {
	const dispatch = useDispatch()
	const { goTo } = usePage()
	const handleClickLast = () => {
		goTo('/', () => {
			dispatch(setCurrentIndex(1))
		})
	}
	const handleClickNext = () => {
		goTo('/agregar-beneficiarios', () => {
			dispatch(setCurrentIndex(3))
		})
	}

	return (
		<Container portada={ImagePortada2}>
			<span></span>
			<div>
				<CMP044 title="Ingresá tus datos personales" />
			</div>

			<Row>
				<CMP038
					type="text"
					mandatory={true}
					label="Tipo de indentificación"
					placeholder="Seleccioná tipo de identificación"
					state=""
					helperText="Identificacion incorrecta"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Número de indentificación"
					placeholder="ingresá tu identificación"
				/>
			</Row>
			<Row>
				<CMP038
					type="text"
					mandatory={false}
					label="Género"
					placeholder="Seleccióna tipo de género"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Nombre"
					placeholder="Ingresá tu nombre"
				/>
				<CMP037
					type="text"
					mandatory={true}
					label="Primer Apellido"
					placeholder="Ingresá tu primer apellido"
				/>
				<CMP037
					type="text"
					mandatory={true}
					label="Segundo Apellido"
					placeholder="Ingresá tu primer apellido"
				/>
			</Row>
			<Row>
				<CMP037
					type="text"
					mandatory={true}
					label="Correo electrónico"
					placeholder="Ingresá tu correo electrónico"
				/>
			</Row>

			<Row>
				<CMP011_5 />
				<CMP011_5 />
			</Row>
			<Row bottom={32}>
				<h2>Datos de residencia</h2>
			</Row>
			<Row>
				<CMP038
					type="text"
					mandatory={false}
					label="Provincia"
					placeholder="Seleccioná la provincia"
				/>
				<CMP038
					type="text"
					mandatory={false}
					label="Cantón"
					placeholder="Seleccioná el cantón"
				/>
				<CMP038
					type="text"
					mandatory={false}
					label="Distrito"
					placeholder="Seleccioná el distrito"
				/>
			</Row>
			<Row>
				<CMP040
					label="Dirección exacta"
					placeholder="Ingresá tu dirección de domicilio"
				/>
			</Row>
			<Row bottom={32}>
				<h2>Planes adicionales</h2>
			</Row>
			<Row>
				<CMP020 />
			</Row>
			<Row>
				<CMP07 />
			</Row>
			<Row>
				<CMP08
					text="Atrás"
					disabled={false}
					style="secondaryLarge"
					onClickHandle={handleClickLast}
				/>
				<CMP010
					text="Continuar"
					style="primaryLarge"
					onClickHandle={handleClickNext}
				/>
			</Row>
		</Container>
	)
}

export default CMP011
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  width: 100%;
  margin-bottom: ${(props) => props.bottom || 32}px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: var(--neutral-background-neutral-olive-100);
  & > span:nth-child(1) {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    z-index: 0;
    background: url(${(props) => props.portada.src});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 230px;
    width: 310px;
    border-radius: 10px;
  }
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

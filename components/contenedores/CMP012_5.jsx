import React from 'react'
import styled from 'styled-components'
import CMP044 from '../common/CMP044'
import CMP08 from '../home/CMP08'
import CMP010 from '../home/CMP010'
import ImagePortada2 from '@/assets/img/PortadaAfiliacion_medismart2.png'
import { setCurrentIndex } from '@/store/slices/configSlice'
import { useDispatch } from 'react-redux'
import usePage from '@/hooks/usePage'
import CMP012 from '../common/CMP012'

const CMP012_5 = () => {
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
			<div>
				<CMP044 title="¿Deseás agregar algún beneficiario?" />
			</div>
			<Row>
				<CMP012
					description="Afiliá un amigo o familiar, para que tenga tus mismos beneficios"
					title="Persona"
					price="13.26"
					type="persona"
					forType="por mes"
				/>
				<CMP012
					description="Afiliá a tu perro o gato y aprovechá beneficios para cuidar de su salud."
					title="Mascotas"
					price="13.26"
					type="mascota"
					forType="por cada una"
				/>
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

export default CMP012_5
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

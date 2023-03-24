import React from 'react'
import styled from 'styled-components'
import CMP06 from '../home/CMP06'

import ImagePortada from '@/assets/img/PortadaAfiliacion_medismart.png'
import { useDispatch } from 'react-redux'
import { setCurrentIndex } from '@/store/slices/configSlice'
import CMP08 from '../home/CMP08'

import usePage from '@/hooks/usePage'
const CMP09 = () => {
	// const [show, setShow] = useState(false)
	// const { pages, currentIndex } = useSelector((state) => state.config)
	const dispatch = useDispatch()
	const { goTo } = usePage()
	const handleClick = () => {
		goTo('/datos-personales', () => {
			dispatch(setCurrentIndex(2))
		})
	}
	return (
		<Container portada={ImagePortada}>
			<span></span>
			<article>
				<h1>Plan Medismart</h1>
				<p>
          Adquirí el mejor plan de medicina prepagada que te aporta beneficios
          en citas y servicios médicos para vos, tus amigos y familiares.
				</p>
			</article>
			<div>
				<CMP06 />
				<Row>
					<CMP08
						text="Continuar"
						style="primaryLarge"
						onClickHandle={handleClick}
					/>
				</Row>
			</div>
		</Container>
	)
}

export default CMP09
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
  margin-bottom: 32px;
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
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      z-index: -12;
    }
    height: 388px;
    width: 1328px;
    border-radius: 10px;
  }

  & > article {
    width: 100%;
    margin-bottom: 48px;
    margin-top: calc(227px - 32px);
    position: relative;
    & > h1 {
      font-family: "Radley";
      font-size: 42px;
      font-weight: 400;
      line-height: 50.4px;
      letter-spacing: 0px;
      text-align: left;
      text-transform: uppercase;
      color: var(--primary-blue-primary-blue-900);
      position: relative;
      width: fit-content;
      margin-bottom: 8px;
    }
    & > p {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
      max-width: 696px;
      z-index: 1;
      color: var(--primary-blue-primary-blue-900);
    }
  }
`

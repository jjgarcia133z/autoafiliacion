/**
 * @file RowBeneficiario.jsx
 * @description Row de beneficiario.
 * @componentNumber CMP024.5
 * 
 */
import React from 'react'
import styled from 'styled-components'
import {
	Hearth,
	Petfoot,
	Star,
	User,
	EditPencil,
	PlusCircle,
	TrashCan,
} from './icons/Icons'
// import { TbDog as DogHead } from 'react-icons/tb'

const RowBeneficiario = ({
	name,
	typePlan,
	benficiario,
	price = '13.00',
	show = true,
	maxWidth = '100%',
}) => {
	return (
		<>
			{show && (
				<Row maxWidth={maxWidth}>
					<div>
						<span>
							{typePlan === 'Propietario' ? (
								<Star />
							) : typePlan === 'Mascota' ? (
								<Petfoot />
							) : typePlan === 'Persona' ? (
								<User />
							) : (
								<Hearth />
							)}
						</span>
						<p>{name}</p>
						<span>-</span>
						<p>{benficiario}</p>
					</div>
					<div>
						<p>
							<span>$</span> {price}
						</p>
					</div>
					<div>
						{typePlan !== 'Propietario' && (
							<button>
								<span>
									<PlusCircle />
								</span>
								<p>Agregar</p>
							</button>
						)}
						<button>
							<span>
								<EditPencil />
							</span>
							<p>Editar</p>
						</button>
						{typePlan !== 'Propietario' && (
							<button>
								<span>
									<TrashCan />
								</span>
								<p>Eliminar</p>
							</button>
						)}
					</div>
				</Row>
			)}
			{!show && (
				<RowEmpty maxWidth={maxWidth}>
					<p>Aún no has agregado ningún beneficiario</p>
				</RowEmpty>
			)}
		</>
	)
}

export default RowBeneficiario
const RowEmpty = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--neutral-gray-colors-neutral-medium-light-grey);
  height: 75px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  border-radius: 10px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;
  & > p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`

const Row = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr 230px;
  grid-template-rows: 1fr;
  grid-template-areas: "name price button";
  background-color: var(--neutral-gray-colors-neutral-medium-light-grey);
  height: 75px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  border-radius: 10px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;
  & div:nth-child(1) {
    grid-area: name;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    color: var(--primary-blue-primary-blue-900);
    flex-grow: 2;

    & span:first-of-type {
      display: flex;
      justify-content: center;
      align-items: center;
      & i {
        font-size: 24px;
        color: var(--primary-green-primary-green-main-500);
      }
    }
    & span:last-of-type {
    }
    & p:first-of-type {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
    }
    & p:last-of-type {
      //styleName: Body/Body Medium  - Montserrat Medium;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  & div:nth-child(2) {
    grid-area: price;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    flex-grow: 1;
    & p {
      text-align: right;
      width: 100%;
      padding-right: 48px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: right;
      color: var(--primary-blue-primary-blue-900);
    }
  }
  & div:nth-child(3) {
    grid-area: button;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
    flex-grow: 2;
    & button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: none;
      //styleName: Body/Body Small - Montserrat Regular;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      height: 48px;
      color: var(--primary-blue-primary-blue-main-500);
      &:hover p,
      &:hover i {
        color: var(--primary-green-primary-green-main-500);
      }
      & i {
        font-size: 24px;
      }
    }
  }
`

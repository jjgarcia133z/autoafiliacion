/**
 * @file Input.jsx
 * @description Input de formulario.
 * @componentNumber CMP037
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { BsCheckCircle as Success, BsXCircle as Fail } from 'react-icons/bs'

const Input = ({
	mandatory = false,
	state = 'none',
	type = 'text',
	label = 'label',
	placeholder = '',
	helperText = 'helper text',
	value = '',
	setValue = null,
	Icon = null,
	TootTip = null,
	iconAction = null,
	iconOnHover = null,
	validation = null,
	tooltipProps = {},
}) => {
	const [stateInput, setStateInput] = useState('none')
	const handleChange = (e) => {
		if (setValue) {
			setValue(e.target.value)
			if (e.target.value.length > 0) {
				validation(e.target.value)
			} else {
				setStateInput('none')
			}
		}
	}
	const handleIconAction = (e) => {
		if (iconAction) {
			iconAction(e)
		}
	}
	const handleIconOnHover = (e) => {
		if (iconOnHover) {
			iconOnHover(e)
		}
	}

	return (
		<InputContainer mandatory={mandatory} state={state} iconAction={iconAction} iconOnHover={iconOnHover}>
			
			<label htmlFor="">
				<span>{label}</span>
				<input
					type={type}
					placeholder={placeholder}
					onChange={(e) => handleChange(e)}
					value={value}
				/>

				{state == 'success' && !Icon && (
					<i>
						<Success />
					</i>
				)}
				{state == 'fail' && !Icon && (
					<i>
						<Fail />
					</i>
				)}
				{Icon && (
					<div onClick={(e) => handleIconAction(e)} onMouseLeave={(e)=>handleIconOnHover(e)} onMouseEnter={(e)=>handleIconOnHover(e)}>
						<Icon />
						{TootTip && <TootTip {...tooltipProps} />}
					</div>
				)}
			</label>
			{state == 'success' || (state == 'fail' && <span>{helperText}</span>)}
		</InputContainer>
	)
}

export default Input

const InputContainer = styled.div`
  position: relative;
  & > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 290px;
    margin-bottom: 8px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--primary-blue-primary-blue-900);
    &::after {
      content: ${(props) => (props.mandatory ? '\'*\'' : '""')};
      position: absolute;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      top: 4px;
      right: 7px;
      width: fit-content;
      color: var(--alert-error);
      user-select: none;
    }
    & > input {
      position: relative;
      width: 100%;
      border: none;
      background: transparent;
      border-bottom: ${(props) =>
		props.state == 'success'
			? '1px solid var(--alert-success)'
			: props.state == 'fail'
				? '1px solid var(--alert-error)'
				: '1px solid var(--primary-blue-primary-blue-200)'};
      /* padding: 0 16px; */
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      line-height: 19.2px;
      letter-spacing: 0px;
      text-align: left;
      padding: 8px 0;
      color: var(--primary-blue-primary-blue-400);

      &::placeholder {
        color: var(--neutral-gray-colors-neutral-gray-900);
      }
      &:focus-visible {
        outline: none;
      }
    }
    & > span:nth-child(1) {
      
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      color: var(--primary-blue-primary-blue-900);
      margin-bottom: 14px;
    }
  }
  & > span {
    position: absolute;
    //styleName: Body/Body Small - Montserrat Regular;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: ${(props) =>
		props.state == 'success'
			? 'var(--alert-success)'
			: props.state == 'fail'
				? 'var(--alert-error)'
				: 'var(--neutral-gray-colors-neutral-gray-900)'};
    margin-bottom: 16px;
  }

  & > label > i {
    position: absolute;
    top: 75%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: ${(props) =>
		props.state == 'success' ? 'var(--alert-success)' : 'var(--alert-error)'};
    background-color: ${(props) =>
		props.state == 'success' || (props.state == 'fail' && 'transparent')};
    pointer-events: none;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
  & > label > div {
    position: absolute;
    top: 75%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    z-index: 10;
    &:hover {
      ${(props) => props.iconAction && 'cursor: pointer;'}
      ${(props) => props.iconOnHover && 'cursor: pointer;'}
    }
  }
`
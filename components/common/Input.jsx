/**
 * @file Input.jsx
 * @description Input de formulario.
 * @componentNumber CMP037
 */
import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { BsCheckCircle as Success, BsXCircle as Fail } from 'react-icons/bs'

const Input = ({
	mandatory = false,
	status = 'none',
	type = 'text',
	label = 'label',
	placeholder = '',
	helperText = 'helper text',
	value = { value: '' },
	setValue = null,
	Icon = null,
	TootTip = null,
	iconAction = null,
	iconOnHover = null,
	regex = null,
	onHandleChange = null,
	tooltipProps = {},
	disabled = false,
}) => {
	const handleChange = useMemo(() => (e) => {
		if (setValue) {
			setValue({ ...value, value: e.target.value, status: 'none'})
		}
		if (onHandleChange) {
			onHandleChange(e)
		}
	})
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
	const validateRegex = ({target}) => {
		if (regex) {
			if (regex.test(target.value.trim())) {
				setValue({ ...value, status: 'success' })
			} else {
				setValue({ ...value, status: 'fail' })
			}
		}
	}
	return (
		<InputContainer
			mandatory={mandatory}
			status={status}
			iconAction={iconAction}
			iconOnHover={iconOnHover}
		>
			<label htmlFor="">
				<span>{label}</span>
				<input
					type={type}
					placeholder={placeholder}
					onChange={(e) => handleChange(e)}
					onBlur={(e) => validateRegex(e)}
					value={value.value}
					disabled={disabled}
				/>

				{status == 'success' && !Icon && (
					<i>
						<Success />
					</i>
				)}
				{status == 'fail' && !Icon && (
					<i>
						<Fail />
					</i>
				)}
				{Icon && (
					<div
						onClick={(e) => handleIconAction(e)}
						onMouseLeave={(e) => handleIconOnHover(e)}
						onMouseEnter={(e) => handleIconOnHover(e)}
					>
						<Icon />
						{TootTip && <TootTip {...tooltipProps} />}
					</div>
				)}
			</label>
			{status == 'success' || (status == 'fail' && <span>{helperText}</span>)}
		</InputContainer>
	)
}
const inputToMemo = React.memo(Input)
// export default Input
export default inputToMemo
// export default Input

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
		props.status == 'success'
			? '1px solid var(--alert-success)'
			: props.status == 'fail'
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
      &:disabled {
        color: var(--primary-blue-primary-blue-100);
        border-bottom: 1px solid #ccc;
        font-weight: 300;
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
    font-size: 13px; //14px original
    font-weight: 400;
    line-height: 15px; //17px original
    letter-spacing: 0px;
    text-align: left;
    top: 75px;
    color: ${(props) =>
		props.status == 'success'
			? 'var(--alert-success)'
			: props.status == 'fail'
				? 'var(--alert-error)'
				: 'var(--neutral-gray-colors-neutral-gray-900)'};
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
		props.status == 'success' ? 'var(--alert-success)' : 'var(--alert-error)'};
    background-color: ${(props) =>
		props.status == 'success' || (props.status == 'fail' && 'transparent')};
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

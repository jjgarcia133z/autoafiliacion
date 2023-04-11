/**
 * @file: Select.jsx
 * @description: Select component.
 * @componentNumber: CMP038
 */
import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
const Select = ({
	mandatory = false,
	status = 'none',
	label = 'label',
	placeholder = '',
	helperText = 'Datos incorrectos',
	options = [],
	onHandleChange = null,
	value = { value: 0},
	setState = null
}) => {

	const handleChange =useMemo(()=> (e) => {
		if (setState) {
			setState({...value, value: e.target.value , status: 'success'})
		}
		if (onHandleChange) {
			onHandleChange(e)
		}
	})

	const selectOptions = options.map((item, index) => (
		<option key={index} value={item.value}>
			{item.label}
		</option>
	))
	return (
		<SelectContainer mandatory={mandatory} status={status}>
			<label>
				<span>{label}</span>
				<select value={value.value} onChange={handleChange}>
					<option value={0} disabled>
						{placeholder}
					</option>
					{selectOptions}
				</select>
			</label>
			{(status === 'fail') && <span>{helperText}</span>}
		</SelectContainer>
	)
}
const SelectToMemo = React.memo(Select)
export default SelectToMemo

const SelectContainer = styled.div`
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
      height: 100%;
      color: var(--alert-error);
    }
    & > select {
      background-color: var(--neutral-gray-colors-neutral-white);
      width: 100%;
      border: none;
      appearance: none;
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
    }
    & > span {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;

      text-align: left;
      color: var(--primary-blue-primary-blue-900);
      margin-bottom: 14px;
    }
  }
  & > span {
    //styleName: Body/Body Small - Montserrat Regular;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: ${(props) =>
		props.status == 'success'
			? 'var(--alert-success)'
			: props.status == 'fail'
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
		props.status == 'success' ? 'var(--alert-success)' : 'var(--alert-error)'};
    pointer-events: none;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`

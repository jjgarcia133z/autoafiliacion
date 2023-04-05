/**
 * @File: TextArea.jsx
 * @Description: Text area de formulario.
 * @ComponentNumber: CMP040
 */
import React from 'react'
import styled from 'styled-components'
import { BsCheckCircle as Success, BsXCircle as Fail } from 'react-icons/bs'
const TextArea = ({
	mandatory = false,
	state = 'none',
	type = 'text',
	label = 'label',
	placeholder = '',
	helperText = 'helper text',
	value = '',
	setValue = null,
}) => {
	const handleChange = (e) => {
		if (setValue) {
			setValue(e.target.value)
		}
	}
  
	return (
		<SelectContainer mandatory={mandatory} state={state}>
			<label htmlFor="">
				<span>{label}</span>
				<textarea type={type} name="" id="" placeholder={placeholder} value={value} onChange={handleChange}/>
				<i>
					{state == 'success' && <Success />}
					{state == 'fail' && <Fail />}
				</i>
			</label>
			{state == 'success' ||
        (state == 'fail' && <span>{helperText}</span>)}
		</SelectContainer>
	)
}

export default TextArea

const SelectContainer = styled.div`
width: 100%;
  position: relative;
  & > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
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
    & > textarea {
      background-color: var(--neutral-gray-colors-neutral-white);
      width: 100% !important;
      border: none;
      border-width: 0;
      resize: none;
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
		props.state == 'success' || props.state == 'fail'
			? 'transparent'
			: 'transparent'};
    pointer-events: none;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`

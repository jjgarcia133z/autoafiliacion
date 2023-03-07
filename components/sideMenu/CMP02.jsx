import React from "react";
import styled from "styled-components";

const CMP02 = ({step}) => {
  const [currentStep, setCurrentStep] = React.useState();

  return (
    <StepperBar step={currentStep}>
      <div>
        <span>1</span>
      </div>
      <div>Tipo Plan</div>
    </StepperBar>
  );
};

export default CMP02;

const StepperBar = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  gap: 14px;
  margin: 18px 0;
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: var(--primary-blue-primary-blue-900);
    border-radius: 50%;
    border: 2px solid var(--secundary-accent-secundary-accent-main-500);
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      background: rgb(123, 172, 83);
      background: linear-gradient(
        -45deg,
        var(--secundary-accent-secundary-accent-900) 0%,
        var(--secundary-accent-secundary-accent-200) 100%
      );
      border-radius: 50%;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--neutral-gray-colors-neutral-white);
    //styleName: Body/Body Medium  - Montserrat Medium;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

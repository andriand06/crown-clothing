import styled, { css } from "styled-components";
const shrinkLabelStyle = css`
  opacity: 1;
  transform: translate(0, -50px);
`;
const normalLabelStyle = css`
  opacity: 0.7;
  transform: translate(5px, -20px);
`;
const showStyle = css`
  opacity: 1;
  animation: shake 0.5s;
  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(4px);
    }
  }
`;
export const InputLabel = styled.label`
  font-size: var(--fontSuperSmall);
  transition: 0.5s all ease-in-out;
  ${({ shrink }) => (shrink ? shrinkLabelStyle : normalLabelStyle)}
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  input {
    height: 30px;
    border-style: none;
    border-bottom: 1px solid var(--darkGrey);
    &:focus ~ label {
      opacity: 1;
      transform: translate(0, -50px);
    }
  }
`;
export const ErrorWrapper = styled.span`
  margin: 0;
  position: relative;
  top: -1rem;
  font-size: var(--fontSuperSmall);
  color: red;
  transition: 0.5s all ease-in-out;
  opacity: 0;
  ${({ isError }) => isError && showStyle}
`;

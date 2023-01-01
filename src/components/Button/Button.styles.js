import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: var(--lightGrey);
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const SignButton = styled(ButtonWrapper)`
  width: 120px;
  background-color: var(--darkNavy);
  &:hover {
    color: var(--darkNavy);
    background-color: var(--lightGrey);
  }
`;

export const SignGoogleButton = styled(ButtonWrapper)`
  width: 140px;
  background-color: var(--lightNavy);
  &:hover {
    background-color: var(--lightGrey);
    color: var(--lightNavy);
  }
`;

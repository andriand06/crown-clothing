import styled from "styled-components";

export const FormWrapper = styled.form`
  min-width: 400px;
  min-height: 600px;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 1.5rem;
  h1 {
    margin-bottom: 0.125rem;
  }
  label {
    margin-bottom: 0.5rem;
  }
  .error-message {
    margin: 1rem 0 0 0;
    position: relative;
    top: -1rem;
    font-size: var(--fontSmall);
    color: red;
    transition: 0.5s all ease-in-out;
    opacity: 0;
    &.show {
      opacity: 1;
      animation: shake 0.5s;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

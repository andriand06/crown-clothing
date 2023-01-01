import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-top: auto;
    background-color: black;
    color: var(--lightGrey);
    height: 40px;
    text-decoration: none;
    border: 1px solid black;
    &:hover {
      cursor: pointer;
      color: black;
      background-color: white;
    }
  }
  &.hidden {
    display: none;
  }
`;

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyMessage = styled.span`
  margin: 0 auto;
`;

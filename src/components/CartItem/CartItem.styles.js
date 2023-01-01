import styled from "styled-components";

export const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  height: 100px;
  img {
    width: 30%;
  }
`;

export const ItemDetailsWrapper = styled.div`
  width: 70%;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 16px;
  }
`;

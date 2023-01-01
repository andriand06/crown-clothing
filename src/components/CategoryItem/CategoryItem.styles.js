import styled from "styled-components";
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  border-radius: 4px;
  box-shadow: 12px 12px 30px #4a4a4a, -12px -12px 30px #4a4a4a;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;
export const Wrapper = styled.div`
  min-width: 30%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin: 15px 15px;
  overflow: hidden;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${CategoryBody} {
      opacity: 1;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
`;

export const LogoWrapper = styled.a`
  padding: 2rem 2rem 1rem 2rem;
`;
export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2rem 1rem 2rem;
  font-size: var(--fontBig);
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: blue;
    font-size: larger;
    transition: all 0.5s ease-in-out;
  }
`;

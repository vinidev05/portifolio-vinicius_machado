import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #1e293b;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 8%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  box-shadow: 0 4px 10px rgba(0, 0, 0, .2);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px 5%;
  }
`;

export const Logo = styled.h1`
  color: #3b82f6;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
  }
`;

export const Menu = styled.a`
  color: #f8fafc;
  font-size: 1rem;
  transition: .3s;

  &:hover {
    color: #3b82f6;
  }

  @media (max-width: 768px) {
    font-size: .95rem;
  }
`;
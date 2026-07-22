import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #1e293b;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8%;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  box-shadow: 0 4px 10px rgba(0,0,0,.2);
`;

export const Logo = styled.h1`
  color: #3b82f6;
  font-size: 1.8rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Menu = styled.a`
  color: #f8fafc;
  font-size: 1rem;
  transition: .3s;

  &:hover{
    color:#3b82f6;
  }
`;
import styled from "styled-components";

export const Button = styled.button`
  position: fixed;

  bottom: 30px;
  right: 30px;

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: #2563eb;

  color: white;

  font-size: 1.2rem;

  cursor: pointer;

  transition: .3s;

  box-shadow: 0 8px 20px rgba(0,0,0,.25);

  &:hover{
    transform: translateY(-4px);
    background:#1d4ed8;
  }
`;
import styled from "styled-components";

export const Container = styled.section`
  padding: 120px 8%;
`;

export const Title = styled.h2`
  text-align: center;
  color: #3b82f6;
  font-size: 3rem;
  margin-bottom: 60px;
`;

export const Cards = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #1e293b;
  padding: 35px;
  border-radius: 12px;
  width: 320px;

  transition: .3s;

  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(59,130,246,.25);
  }
`;

export const CardTitle = styled.h3`
  color: #3b82f6;
  margin-bottom: 25px;
  font-size: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  color: #d1d5db;
  font-size: 1rem;

  svg{
    color:#3b82f6;
    font-size:1.3rem;
  }
`;
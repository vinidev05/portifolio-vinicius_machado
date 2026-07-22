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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
`;
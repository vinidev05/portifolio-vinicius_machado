import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8%;
`;

export const Content = styled.div`
  max-width: 600px;
`;

export const Subtitle = styled.h2`
  color: #94a3b8;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 20px;

  span {
    color: #3b82f6;
  }
`;

export const Description = styled.p`
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 40px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const PrimaryButton = styled.a`
  background: #3b82f6;
  color: white;

  padding: 15px 30px;

  border-radius: 8px;

  transition: .3s;

  &:hover{
    background:#2563eb;
  }
`;

export const SecondaryButton = styled.a`
  border:2px solid #3b82f6;

  color:#3b82f6;

  padding:15px 30px;

  border-radius:8px;

  transition:.3s;

  &:hover{
    background:#3b82f6;
    color:white;
  }
`;

export const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Circle = styled.div`
  width:320px;
  height:320px;

  border-radius:50%;

  background:linear-gradient(135deg,#3b82f6,#7c3aed);

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:120px;

  box-shadow:0 0 40px rgba(59,130,246,.35);
`;
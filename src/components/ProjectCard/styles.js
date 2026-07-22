import styled from "styled-components";

export const Card = styled.article`
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;

  transition: .35s;

  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 18px 35px rgba(59,130,246,.25);
  }

  &:hover img{
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  height: 220px;

  background: linear-gradient(
    135deg,
    #3b82f6,
    #7c3aed
  );

  display:flex;
  justify-content:center;
  align-items:center;

  color:white;
  font-size:1.2rem;
  font-weight:bold;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.4s;
`;

export const Content = styled.div`
  padding:25px;
`;

export const Title = styled.h3`
  color:white;
  margin-bottom:15px;
`;

export const Description = styled.p`
  color:#cbd5e1;
  line-height:1.7;
  margin-bottom:20px;
`;

export const Technologies = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:10px;

  margin-bottom:25px;
`;

export const Badge = styled.span`
  background:#3b82f6;
  color:white;

  padding:6px 14px;

  border-radius:30px;

  font-size:.85rem;
`;

export const Buttons = styled.div`
  display:flex;
  gap:15px;
`;

export const Button = styled.a`
  flex:1;

  background:#2563eb;

  color:white;

  text-align:center;

  padding:12px;

  border-radius:8px;

  transition:.3s;

  &:hover{
    background:#1d4ed8;
  }
`;
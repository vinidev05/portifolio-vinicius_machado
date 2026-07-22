import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  padding: 0 8%;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding-top: 120px;
  }
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
  line-height: 1.1;

  span {
    color: #3b82f6;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
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
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  background: #3b82f6;
  color: white;

  padding: 15px 30px;
  border-radius: 8px;

  text-decoration: none;

  transition: 0.3s;

  &:hover {
    background: #2563eb;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`;

export const SecondaryButton = styled.a`
  border: 2px solid #3b82f6;
  color: #3b82f6;

  padding: 15px 30px;
  border-radius: 8px;

  text-decoration: none;

  transition: 0.3s;

  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 45px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Stat = styled.div`
  background: #1e293b;
  padding: 16px 22px;
  border-radius: 12px;
  text-align: center;
  min-width: 120px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.25);
  }

  h3 {
    color: #3b82f6;
    margin-bottom: 6px;
    font-size: 1.2rem;
  }

  p {
    color: #cbd5e1;
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: 320px;
  height: 320px;

  border-radius: 50%;

  background: linear-gradient(135deg, #3b82f6, #7c3aed);

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%
    }
    
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 120px;

  box-shadow: 0 0 40px rgba(59, 130, 246, 0.35);

  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(59, 130, 246, 0.45);
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
    font-size: 90px;
  }
`;
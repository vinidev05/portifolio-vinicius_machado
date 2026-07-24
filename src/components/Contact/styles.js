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
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #1e293b;
  width: 320px;

  padding: 40px;

  border-radius: 16px;

  text-align: center;

  transition: .3s;

  color: white;

  svg{
    color:#3b82f6;
    margin-bottom:20px;
  }

  &:hover{
    transform: translateY(-8px);

    box-shadow:0 12px 30px rgba(59,130,246,.25);
  }
`;

export const CardTitle = styled.h3`
  margin-bottom:20px;
`;

export const CardText = styled.p`
  color:#cbd5e1;
`;

export const Link = styled.a`
  color:#3b82f6;

  &:hover{
    text-decoration:underline;
  }
`;

export const Form = styled.form`
  max-width: 700px;
  margin: 70px auto 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  background: #1e293b;
  color: white;

  border: 2px solid transparent;
  border-radius: 10px;

  padding: 16px;

  font-size: 1rem;

  transition: .3s;

  &:focus{
    outline:none;
    border-color:#3b82f6;
  }
`;

export const TextArea = styled.textarea`
  background:#1e293b;
  color:white;

  border:2px solid transparent;
  border-radius:10px;

  padding:16px;

  font-size:1rem;

  resize:none;

  transition:.3s;

  &:focus{
    outline:none;
    border-color:#3b82f6;
  }
`;

export const Button = styled.button`
  background:#3b82f6;
  color:white;

  border:none;
  border-radius:10px;

  padding:16px;

  font-size:1rem;
  font-weight:bold;

  cursor:pointer;

  transition:.3s;

  &:hover{
    background:#2563eb;
    transform:translateY(-3px);
  }
`;
import { useState } from "react";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

import {
  Container,
  Title,
  Cards,
  Card,
  CardTitle,
  CardText,
  Link,
  Form,
  Input,
  TextArea,
  Button,
} from "./styles";

const Contact = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const assunto = `Contato de ${form.nome}`;

    const corpo = `
Nome: ${form.nome}

Email: ${form.email}

Mensagem:
${form.mensagem}
    `;

    window.location.href = `mailto:vini06041013@gmail.com?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;

    setForm({
      nome: "",
      email: "",
      mensagem: "",
    });
  };

  return (
    <Container id="contato">
      <Title>Contato</Title>

      <Cards>
        <Card>
          <FaEnvelope size={40} />
          <CardTitle>E-mail</CardTitle>

          <CardText>
            <Link href="mailto:vini06041013@gmail.com">
              vini06041013@gmail.com
            </Link>
          </CardText>
        </Card>

        <Card>
          <FaGithub size={40} />
          <CardTitle>GitHub</CardTitle>

          <CardText>
            <Link
              href="https://github.com/vinidev05"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/vinidev05
            </Link>
          </CardText>
        </Card>

        <Card>
          <FaMapMarkerAlt size={40} />
          <CardTitle>Localização</CardTitle>

          <CardText>Charqueadas - RS</CardText>
        </Card>
      </Cards>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          value={form.nome}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          value={form.email}
          onChange={handleChange}
        />

        <TextArea
          name="mensagem"
          rows="6"
          placeholder="Digite sua mensagem..."
          required
          value={form.mensagem}
          onChange={handleChange}
        />

        <Button type="submit">
          Enviar mensagem
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
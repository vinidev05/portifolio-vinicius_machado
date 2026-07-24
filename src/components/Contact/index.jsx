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
            >
              github.com/vinidev05
            </Link>
          </CardText>
        </Card>

        <Card>
          <FaMapMarkerAlt size={40} />
          <CardTitle>Localização</CardTitle>

          <CardText>
            Charqueadas - RS
          </CardText>
        </Card>
      </Cards>

      <Form
          action="https://formsubmit.co/vini06041013@gmail.com"
          method="POST"
        >
          <Input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />

          <TextArea
            name="message"
            placeholder="Digite sua mensagem..."
            rows="6"
            required
          />

          <Button type="submit">
            Enviar mensagem
          </Button>
        </Form>
    </Container>
  );
};

export default Contact;
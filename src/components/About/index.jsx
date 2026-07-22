import {
  Container,
  Content,
  Title,
  Text,
} from "./styles";

const About = () => {
  return (
    <Container id="sobre">
      <Content>
        <Title>Sobre Mim</Title>

        <Text>
          Olá! Meu nome é <strong>Vinícius Eduardo</strong> e sou
          desenvolvedor Front-End em formação pela EBAC.

          <br />
          <br />

          Durante minha jornada desenvolvi diversos projetos utilizando
          HTML, CSS, JavaScript, React, Next.js e TypeScript,
          sempre buscando escrever código limpo,
          organizado e responsivo.

          <br />
          <br />

          Atualmente continuo aprimorando minhas habilidades
          e pretendo evoluir para o desenvolvimento Full Stack,
          iniciando meus estudos em Back-End com Python.
        </Text>
      </Content>
    </Container>
  );
};

export default About;
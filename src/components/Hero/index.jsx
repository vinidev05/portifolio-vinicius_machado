import {
  Container,
  Content,
  Subtitle,
  Title,
  Description,
  Buttons,
  Stats,
  Stat,
  PrimaryButton,
  SecondaryButton,
  ImageContainer,
  Circle,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Content>
        <Subtitle>Olá, eu sou</Subtitle>

        <Title>
          Vinícius <span>Eduardo</span>
        </Title>

        <Description>
          Desenvolvedor Front-End em formação, apaixonado por tecnologia e por
          criar aplicações modernas utilizando React, JavaScript, Next.js e
          TypeScript.
        </Description>

        <Buttons>
          <PrimaryButton href="#projetos">
            Ver Projetos
          </PrimaryButton>

          <SecondaryButton
            href="https://github.com/vinidev05"
            target="_blank"
          >
            GitHub
          </SecondaryButton>
        </Buttons>
        <Stats>
          <Stat>
            <h3>5+</h3>
            <p>Projetos</p>
          </Stat>

          <Stat>
            <h3>100%</h3>
            <p>Aprovados</p>
          </Stat>

          <Stat>
            <h3>React</h3>
            <p>Principal</p>
          </Stat>

          <Stat>
            <h3>Full Stack</h3>
            <p>Em evolução</p>
          </Stat>
        </Stats>
      </Content>

      <ImageContainer>
        <Circle>
          👨‍💻
        </Circle>
      </ImageContainer>
    </Container>
  );
};

export default Hero;
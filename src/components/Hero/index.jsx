import {
  Container,
  Content,
  Subtitle,
  Title,
  Description,
  Buttons,
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
import {
  Container,
  Name,
  Text,
  Copyright,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Name>Vinícius Eduardo</Name>

      <Text>
        Desenvolvedor Front-End
      </Text>

      <Text>
        Feito utilizando React e Styled Components
      </Text>

      <Copyright>
        © {new Date().getFullYear()} Vinícius Eduardo.
        Todos os direitos reservados.
      </Copyright>
    </Container>
  );
};

export default Footer;
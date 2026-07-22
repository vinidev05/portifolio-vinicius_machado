import { Container, Logo, Nav, Menu } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>Vinícius.dev</Logo>

      <Nav>
        <Menu href="#sobre">Sobre</Menu>
        <Menu href="#habilidades">Habilidades</Menu>
        <Menu href="#projetos">Projetos</Menu>
        <Menu href="#contato">Contato</Menu>
      </Nav>
    </Container>
  );
};

export default Header;
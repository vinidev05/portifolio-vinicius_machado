import {
  Container,
  Title,
  Cards,
  Card,
  CardTitle,
  List,
  Item,
} from "./styles";

import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiVite,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <Container id="habilidades">
      <Title>Habilidades</Title>

      <Cards>
        <Card>
          <CardTitle>💻 Front-End</CardTitle>

          <List>
            <Item>
              <FaReact />
              React
            </Item>

            <Item>
              <SiNextdotjs />
              Next.js
            </Item>

            <Item>
              <FaJsSquare />
              JavaScript
            </Item>

            <Item>
              <SiTypescript />
              TypeScript
            </Item>
          </List>
        </Card>

        <Card>
          <CardTitle>🎨 Estilização</CardTitle>

          <List>
            <Item>
              <SiStyledcomponents />
              Styled Components
            </Item>

            <Item>
              <FaCss3Alt />
              CSS3
            </Item>
          </List>
        </Card>

        <Card>
          <CardTitle>⚙️ Ferramentas</CardTitle>

          <List>
            <Item>
              <FaGitAlt />
              Git
            </Item>

            <Item>
              <FaGithub />
              GitHub
            </Item>

            <Item>
              <SiVite />
              Vite
            </Item>

            <Item>
              <SiVercel />
              Vercel
            </Item>
          </List>
        </Card>
      </Cards>
    </Container>
  );
};

export default Skills;
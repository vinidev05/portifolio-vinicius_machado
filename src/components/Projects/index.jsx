import ProjectCard from "../ProjectCard";
import projects from "../../data/projects";

import {
  Container,
  Title,
  Grid,
} from "./styles";

const Projects = () => {
  return (
    <Container id="projetos">
      <Title>Projetos</Title>

      <Grid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
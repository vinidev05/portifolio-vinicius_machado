import {
  Card,
  ProjectImage,
  Content,
  Title,
  Year,
  Description,
  Technologies,
  Badge,
  Buttons,
  Button,
} from "./styles";

function ProjectCard({ project }) {
  return (
    <Card>
      <ProjectImage
        src={project.image}
        alt={project.title}
      />

      <Content>
        <Title>{project.title}</Title>

        <Year>{project.year}</Year>

        <Description>{project.description}</Description>

        <Technologies>
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </Technologies>

        <Buttons>
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>

          {project.demo && (
            <Button
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Button>
          )}
        </Buttons>
      </Content>
    </Card>
  );
}

export default ProjectCard;
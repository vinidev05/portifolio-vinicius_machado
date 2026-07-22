import {
  Card,
  Image,
  ProjectImage,
  Content,
  Title,
  Info,
  Description,
  Technologies,
  Badge,
  Buttons,
  Button,
} from "./styles";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image>
        {project.image ? (
          <ProjectImage
            src={project.image}
            alt={project.title}
          />
        ) : (
          <span>Imagem do Projeto</span>
        )}
      </Image>

      <Content>
        <Title>{project.title}</Title>

        <info>
            {project.year} • {project.status}
        </info>

        <Description>
          {project.description}
        </Description>

        <Technologies>
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </Technologies>

        <Buttons>
          <Button
            href={project.github}
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            href={project.demo || "#"}
            target="_blank"
          >
            Demo
          </Button>
        </Buttons>
      </Content>
    </Card>
  );
};

export default ProjectCard;
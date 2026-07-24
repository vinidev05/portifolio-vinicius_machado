import {
  Card,
  Image,
  Info,
  Title,
  Year,
  Description,
  Technologies,
  Tech,
  Buttons,
  Button,
} from "./styles";

function ProjectCard({ project }) {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />

      <Info>
        <Title>{project.title}</Title>

        <Year>{project.year}</Year>

        <Description>{project.description}</Description>

        <Technologies>
          {project.technologies.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
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
      </Info>
    </Card>
  );
}

export default ProjectCard;
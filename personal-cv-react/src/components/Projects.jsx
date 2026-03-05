import card from "./card";

function Projects({ projects }) {
  return (
    <Card title="Projects">
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> - {project.description}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Projects;
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>Nombre del proyecto:{project.name}</p>
            <img src={project.image}  alt='imagen del proyecto' />
            <p>Descripción:{project.description} </p>
            <a href={project.url} target="_blank">Enlace al proyecto</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Projects;

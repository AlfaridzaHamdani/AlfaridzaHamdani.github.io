import React from "react";
import style from "../styles/variables.module.scss";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { ProjectsData } from "./data";

const Projects = () => {
  return (
    <div className={style.projects}>
      <h1 className={style.title}>Recent Projects</h1>
      {ProjectsData.slice(0, 10)
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            cat={item.cat}
            type={item.type}
            tech={item.tech}
            id={item.id}
          />
        ))}
      <Button text="More Projects" linkTo="/projects" />
    </div>
  );
};

export default Projects;

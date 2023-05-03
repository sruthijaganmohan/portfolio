import React from "react";
import './project.css';

export const Project = (props) => {
    const { id, projectImage, projectName, projectSkills, projectDescription, projectLink } = props.data;

    return (
        <div className="project-container">
            <a target="_blank" id="project-link" href={projectLink}>
            <div className="project">
                <div className="project-image">
                    <img id="images" src={projectImage} alt="project" />
                </div>
                <div className="project-desc">
                    <p id="project-name"> {projectName} </p>
                    <p id="project-skills"> {projectSkills}</p>
                    <p id="project-description">{projectDescription} </p>
                </div>
            </div>
            </a>
        </div>
    );
};
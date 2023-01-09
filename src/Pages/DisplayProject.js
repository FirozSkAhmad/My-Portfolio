import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../Helpers/ProjectList'
import '../Styles/DisplayProject.css'
import GitHubIcon from '@mui/icons-material/GitHub'

function DisplayProject() {
    const { id } = useParams()
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} alt="photo" />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href={project.link} target="_blan">
                <GitHubIcon />
            </a>
        </div>
    )
}

export default DisplayProject

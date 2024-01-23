//import { Heart } from "../Heart/Heart"

import { Project } from '../../Classes/Project/Project'
import heart from '../../assets/spotify_heart.png'
import "./ProjectListItem.css"

type Props = {
    project: Project
}

export function ProjectListItem({project}: Props){


    return(
        <li className='project-li'>
                <div className="project-li-container">
                    <div className='project-pic-and-name'>
                    <a href={project.githubLink}>{project.image}</a>
                        <div className='project-name-and-languages'>
                            <h2 className='name-and-languages'>{project.name}</h2>
                            <h5 className='name-and-languages'>{project.languages}</h5>
                        </div>
                    </div>
                    
                    <div className='project-description-div'>
                        <br></br>
                        <h4 className='project-description'>{project.description}</h4>
                    </div>

                    <div className='project-image-div'>
                        <br></br>
                        <img className="heart" src={heart}></img>
                    </div>
                    
                </div>
        </li>
    )
}
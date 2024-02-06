//import { Heart } from "../Heart/Heart"

import { Project } from '../../Classes/Project'
import heart from '../../assets/spotify_heart.png'
import "./ProjectListItem.css"

type Props = {
    project: Project,
    setOverlayObject: Function
}

export function ProjectListItem({project, setOverlayObject}: Props){


    const clickHandler = () =>{
        setOverlayObject(project)
    }

    const getLanguages = ()=> {
        var ret = ""
        project.skills.forEach((skill)=>{
            ret += skill + " "
        })
        return ret
    }

    return(
        <li className='project-li'>
                <div className="project-li-container">
                    <div className='project-pic-and-name'>
                        <a href={project.githubLink}>
                            <img src={project.image} className='project-image'></img>
                        </a>
                        <button className='project-name-and-languages' onClick={clickHandler}>
                            
                                <h2 className='name-and-languages'>{project.title}</h2>
                                <h5 className='name-and-languages'>{getLanguages()}</h5>
                            
                        </button>
                        
                    </div>
                    
                    <div className='project-description-div'>
                        <br></br>
                        <h4 className='project-description'>{project.blurb}</h4>
                    </div>

                    <div className='project-image-div'>
                        <br></br>
                        <img className="heart" src={heart}></img>
                    </div>
                    
                </div>
        </li>
    )
}
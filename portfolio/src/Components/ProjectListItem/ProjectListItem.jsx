import "./ProjectListItem.css"

export function ProjectListItem({project}){

    return(
        <li>
            <a href={project.githubLink}>
                <div className="project-li-container">
                    {project.image}
                    <div>
                        <h2>{project.name}</h2>
                        <h4>{project.languages}</h4>
                    </div>

                    <h3>{project.description}</h3>
                    
                </div>
            </a>
        </li>
    )
}
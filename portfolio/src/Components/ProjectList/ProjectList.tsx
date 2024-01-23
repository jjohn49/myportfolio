/* eslint-disable react/jsx-key */
import "./ProjectList.css"
import { projects } from "../../Classes/Project/Project"
import { ProjectListItem } from "../ProjectListItem/ProjectListItem"

export function ProjectList(){

    var lis = projects.map((proj)=>{
        return <ProjectListItem project={proj}></ProjectListItem>
    })

    return(
        <div className="section-body">
            <h3 className="section-title">Projects</h3>
            <ol id="projects">
                {lis}
            </ol>
        </div>
    )
}
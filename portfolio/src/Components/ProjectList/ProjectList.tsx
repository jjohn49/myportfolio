/* eslint-disable react/jsx-key */
import "./ProjectList.css"
import { projects } from "../../Classes/Project"
import { ProjectListItem } from "../ProjectListItem/ProjectListItem"

type Props = {
    setOverlayObject: Function
}

export function ProjectList({setOverlayObject}:Props){

    var lis = projects.map((proj)=>{
        return <ProjectListItem project={proj} setOverlayObject={setOverlayObject}></ProjectListItem>
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
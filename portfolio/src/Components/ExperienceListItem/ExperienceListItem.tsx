import { MouseEventHandler } from "react"
import { Experience } from "../../Classes/Experience/Experience"
import "./ExperienceListItem.css"

type Props = {
    experience: Experience,
    callback: MouseEventHandler
}

export function ExperienceListItem({experience, callback}: Props){
    console.log(experience)
    return (
        <li className="experience-card">
            <button onClick={callback}>{experience.image}</button>
        </li>
    )
}
import { MouseEventHandler, useState } from "react"
import { Experience } from "../../Classes/Experience/Experience"
import "./ExperienceListItem.css"

type Props = {
    experience: Experience,
    callback: MouseEventHandler
}

export function ExperienceListItem({experience, callback}: Props){
    
    const [style, setStyle] = useState('experience-card')

    const onHover = ()=>{
        setStyle('experience-card experience-card-hover')
    }

    const onLeave = ()=>{
        setStyle('experience-card')
    }

    return (
        <li className={style}>
            <button onClick={callback} onMouseOver={onHover} onMouseLeave={onLeave}>{experience.image}</button>
        </li>
    )
}
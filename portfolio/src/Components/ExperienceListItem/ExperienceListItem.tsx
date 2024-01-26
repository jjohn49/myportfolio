import { MouseEventHandler, useState } from "react"
import { Experience } from "../../Classes/Experience/Experience"
import "./ExperienceListItem.css"

type Props = {
    experience: Experience,
    setOverlayObject:Function
}

export function ExperienceListItem({experience, setOverlayObject}: Props){
    
    const [style, setStyle] = useState('experience-card')

    //Why the fuck do I need to have this method when I can just call the function in onClick???
    const clickHandler = () =>{
        setOverlayObject(experience)
    }

    const onHover = ()=>{
        setStyle('experience-card experience-card-hover')
    }

    const onLeave = ()=>{
        setStyle('experience-card')
    }

    return (
        <li className={style}>
            <button onClick={clickHandler} onMouseOver={onHover} onMouseLeave={onLeave}>{experience.image}</button>
        </li>
    )
}
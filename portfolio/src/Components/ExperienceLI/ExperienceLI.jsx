//import { Experience } from "../../Classes/Experience"

export function ExperienceCard({experiece}){
    console.log(experiece)
    return (
        <li id="experience-card">
            <button>{experiece.image}</button>
        </li>
    )
}
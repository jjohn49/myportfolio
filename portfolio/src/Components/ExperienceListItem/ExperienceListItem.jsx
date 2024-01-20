import "./ExperienceListItem.css"

export function ExperienceListItem({experiece, callback}){
    console.log(experiece)
    return (
        <li className="experience-card">
            <button onClick={callback}>{experiece.image}</button>
        </li>
    )
}
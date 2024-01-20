/* eslint-disable react/jsx-key */
import './ExperienceList.css'
import { experiences } from '../../Classes/Experience'
import { ExperienceCard } from '../ExperienceLI/ExperienceLI'

export function ExperienceList(){

    let lis = experiences.map((exp)=>{
        return <ExperienceCard experiece={exp}></ExperienceCard>
    })
    return(
        <div id='experience'>
            <ul>
                {lis}
            </ul>
        </div>
    )
}
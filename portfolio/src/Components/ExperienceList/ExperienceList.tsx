/* eslint-disable react/jsx-key */
import './ExperienceList.css'
import { experiences } from '../../Classes/Experience'
import { ExperienceListItem } from '../ExperienceListItem/ExperienceListItem';

type Props = {
    setOverlayObject: Function
}

export function ExperienceList({setOverlayObject}:Props){

    let lis = experiences.map((exp)=>{
        return <ExperienceListItem experience={exp} setOverlayObject={setOverlayObject}></ExperienceListItem>
    })
    return(
        <div className='section-body'>
            <h3 className='section-title'>Experience</h3>
            <ul id='experience-list'>
                {lis}
                <li className='experience-list-item'>
                    <button id='more-coming-button'>
                        <div id='more-coming-li'></div>
                    </button>
                </li>
            </ul>
        </div>
    )
}
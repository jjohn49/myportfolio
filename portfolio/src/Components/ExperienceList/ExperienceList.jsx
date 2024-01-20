/* eslint-disable react/jsx-key */
import './ExperienceList.css'
import { experiences } from '../../Classes/Experience/Experience'
import { ExperienceListItem } from '../ExperienceListItem/ExperienceListItem'

function tempCallback(){
    console.log("Callbacl worked");
}

export function ExperienceList(){

    let lis = experiences.map((exp)=>{
        return <ExperienceListItem experiece={exp} callback={tempCallback}></ExperienceListItem>
    })
    return(
        <div className='section-body'>
            <h3 className='section-title'>Experience</h3>
            <ul>
                {lis}
                <li>
                    <button id='more-coming-button'>
                        <div id='more-coming-li'></div>
                    </button>
                </li>
            </ul>
        </div>
    )
}
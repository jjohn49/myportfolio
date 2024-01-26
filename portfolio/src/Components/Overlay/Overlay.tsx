import { Experience } from '../../Classes/Experience/Experience'
import { Project } from '../../Classes/Project/Project'
import './Overlay.css'

type Props ={
    object: Project|Experience|null,
    onClose: Function,
    
}
export function Overlay({object, onClose}: Props){
    return(
        <>
            {object != null ? (
                <div id='overlay'>
                    
                    <div id='overlay-content'>
                        <h1>{object.title}</h1>
                    </div>
                    
    
                </div> 
            ) : null}
        </>
        
    )
}
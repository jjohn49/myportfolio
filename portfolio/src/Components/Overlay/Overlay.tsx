import { Experience } from '../../Classes/Experience'
import { Project } from '../../Classes/Project'
import './Overlay.css'

type Props ={
    object: Project|Experience|null,
    onClose: Function,
    
}
export function Overlay({object, onClose}: Props){

    const clickOff = ()=>{
        onClose();
    }

    return(
        <>
            {object != null ? (
                <div id='overlay'>
                    <div id='backdrop' onClick={clickOff}/>
                    
                    <div id='overlay-content'>
                        <div id='object-image'>{object.image}</div>
                        <h1>{object.title}</h1>
                    </div>
                        
                </div>
            ) : null}
        </>
        
    )
}
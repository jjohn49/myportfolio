import { Experience } from '../../Classes/Experience/Experience'
import { Project } from '../../Classes/Project/Project'
import './Overlay.css'

type Props ={
    isOpen: boolean,
    onClose: Function,
    object: Project|Experience|null
}
export function Overlay({isOpen, onClose, object}: Props){
    return(
        <>
            {isOpen ? (
                <div className='overlay'>

                </div> 
            ) : null}
        </>
        
    )
}
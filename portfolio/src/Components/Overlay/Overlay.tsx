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
                        <div id='object-image'>
                            <img src={object.image} className='overlay-object-image'/>
                            <div id='object-logo-title'>
                                <img src={object.logo} id='object-logo'/>
                                <h1 id='object-title'>{object.title}</h1>
                            </div>
                        </div>
                        <div>
                            <h3>{object.description}</h3>
                            
                        </div>
                        
                    </div>
                        
                </div>
            ) : null}
        </>
        
    )
}
import { MouseEventHandler } from 'react';
import './TopButton.css'

type Props = {
    name: string,
    callback: MouseEventHandler 
}

export function TopButton({name, callback}: Props){
    var id = 'topbutton' + name;
    return(
        <button onClick={callback} className='topbutton' id={id}>
            <div>
                {name}
            </div>
        </button>
    )
}

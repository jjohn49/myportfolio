import { MouseEventHandler, useEffect, useState } from 'react';
import './TopButton.css'

type Props = {
    name: string,
    callback: MouseEventHandler 
}

export function TopButton({name, callback}: Props){
    
    const [style, setStyle] = useState('topbutton')
    const onHover = ()=>{
        setStyle('topbutton hover')
    }

    const onLeave = ()=>{
        setStyle('topbutton')
    }

    var id = 'topbutton' + name;
    return(
        <button onClick={callback} className={style} onMouseOver={onHover} onMouseLeave={onLeave}>
            <div>
                {name}
            </div>
        </button>
    )
}

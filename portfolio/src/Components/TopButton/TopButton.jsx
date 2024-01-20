import './TopButton.css'

export function TopButton({name, callback}){
    return(
        <button onClick={callback} id='topbutton'>{name}</button>
    )
}

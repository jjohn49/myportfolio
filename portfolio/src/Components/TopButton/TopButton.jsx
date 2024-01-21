import './TopButton.css'

export function TopButton({name, callback}){
    var id = 'topbutton' + name;
    return(
        <button onClick={callback} className='topbutton' id={id}>
            <div>
                {name}
            </div>
        </button>
    )
}

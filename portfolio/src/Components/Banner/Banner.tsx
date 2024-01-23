import { TopButton } from '../TopButton/TopButton'
import './Banner.css'

export function Banner(){

    return (
        <div id='banner-fade'>
            <div id='top-buttons'>
                <TopButton name={"About"} callback={()=>{console.log("hello")}}></TopButton>
                <br></br>  
                <TopButton name={"Contact"} callback={()=>{console.log("hello")}}></TopButton>              
            </div>
            <div id='banner-elements'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='Image'></img>
                <div id="banner-elements-textbox">
                    <h4 className='banner-elements-text'>Software Engineer</h4>
                    <h1 id='banner-name' className='banner-elements-text'>I am Jack Johnston</h1>
                    <h4 className='banner-elements-text'># Public Repositories | 1 Internship</h4>
                </div>
                
            </div>
        </div>
    )
}
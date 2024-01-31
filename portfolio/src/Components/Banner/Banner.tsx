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
                    <h1 id='banner-name' className='banner-elements-text'>Jack Johnston</h1>
                    <h4 className='banner-elements-text'># Public Repositories | 1 Internship</h4>
                    <div id='description'>
                        <h4>I am a Software Engineer interested in a wide variety of areas such as iOS Engineering, Game development, and much more.  
                            Pretty much any project that allows me to sit down, code for a while, and listen to some Lo-Fi Beats :).  
                            I truly believe that music is an underappreciated tool and can be used improve performance and morale, which is why I took heavy inspiration from Spotify to make this portfolio.</h4>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
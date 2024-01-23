import fortnite from "../../assets/Fortnite.jpeg"
import epic_games_logo from "../../assets/epic_logo_black.jpg"
import vsds_logo from "../../assets/VSDS_logo.png" 

import "./Experience.css"
export class Experience{
    title: string
    company: string
    image: React.JSX.Element
    logo: React.JSX.Element
    description: string
    skills: string[]

    constructor(title: string, company: string, image: React.JSX.Element, logo: React.JSX.Element, description: string, skills: string[]){
        this.title = title
        this.company = company
        this.image = image
        this.logo = logo
        this.description = description
        this.skills = skills
    }
}

export var experiences = [
    new Experience("Software Engineer Intern", "Epic Games", <img src={fortnite} className="experience-image"></img>, <img src={epic_games_logo}></img>, "yada yada yada", ["C++","Unreal Engine", "BluePrints"]),
    new Experience("Co-Founder, Software Engineer", "Villanova Software Development Societey", <img src={vsds_logo} className="experience-image"></img>, <img src={vsds_logo}></img>, "yada yada yada", ["React","Java","Springboot"])
]
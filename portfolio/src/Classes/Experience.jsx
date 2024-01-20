import fortnite from "../assets/Fortnite.jpeg" 
import "./Experience.css"
export class Experience{
    constructor(title, company, image, logo, description, skills){
        this.title = title
        this.company = company
        this.image = image
        this.logo = logo
        this.description = description
        this.skills = skills
    }
}

export var experiences = [
    new Experience("Software Engineer Intern", "Epic Games", <img src={fortnite} id="experience-image"></img>, <img src="/assets/epic_logo_black.jpg"></img>, "yada yada yada", ["C++","Unreal Engine", "BluePrints"])
]
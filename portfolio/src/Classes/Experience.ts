import { ParentObject } from "./ParentObject"

export class Experience extends ParentObject{
    
    constructor(title: string, company: string, image: string, logo: string, blurb:string,  description: string, skills: string[]){
        super(title, image, logo, blurb, description, skills)
    }
}

export var experiences = [
    new Experience("Software Engineer Intern", "Epic Games", "/src/assets/Fortnite.jpeg", "/src/assets/epic_logo_black.jpg", "yada yada yada", "",["C++","Unreal Engine", "BluePrints"]),
    new Experience("Co-Founder, Software Engineer", "Villanova Software Development Societey", "/src/assets/VSDS_logo.png","/src/assets/VSDS_logo.png", "yada yada yada", "",["React","Java","Springboot"])
]
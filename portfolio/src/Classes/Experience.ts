
export class Experience{
    title: string
    company: string
    image: string
    logo: string
    description: string
    skills: string[]

    constructor(title: string, company: string, image: string, logo: string, description: string, skills: string[]){
        this.title = title
        this.company = company
        this.image = image
        this.logo = logo
        this.description = description
        this.skills = skills
    }
}

export var experiences = [
    new Experience("Software Engineer Intern", "Epic Games", "/src/assets/Fortnite.jpeg", "/src/assets/epic_logo_black.jpg", "yada yada yada", ["C++","Unreal Engine", "BluePrints"]),
    new Experience("Co-Founder, Software Engineer", "Villanova Software Development Societey", "/src/assets/VSDS_logo.png","/src/assets/VSDS_logo.png", "yada yada yada", ["React","Java","Springboot"])
]
export class ParentObject{
    title:string
    image: string
    logo: string
    blurb: string
    description:string
    skills: string[]
    
    constructor(title:string, image:string, logo:string, blurb: string, description:string, skills:string[]){
        this.title = title
        this.image = image
        this.logo = logo
        this.blurb = blurb
        this.description = description
        this.skills = skills
    }
}
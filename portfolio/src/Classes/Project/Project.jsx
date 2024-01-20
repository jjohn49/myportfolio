import "./Project.css"
import githubLogo from "../../assets/github_git_hub_logo_icon_132878.png"

export class Project{
    constructor(name, image, description, githubLink, languages){
        this.name = name
        this.image = image
        this.description = description
        this.githubLink = githubLink
        this.languages = languages
    }
}

export var projects = [ 
    new Project("Dog Breed Classifier", <img className="project-image" src={githubLogo}></img>,"yada yada yada", "", "Python, Sci-kit Learn, Tensorflow, Keras, Pandas")
]
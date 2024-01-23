import "./Project.css"
import githubLogo from "../../assets/github_git_hub_logo_icon_132878.png"

export class Project{
    name: string
    image: React.JSX.Element
    description: string
    githubLink:string
    languages:string
    
    constructor(name: string, image: React.JSX.Element, description:string, githubLink:string, languages:string){
        this.name = name
        this.image = image
        this.description = description
        this.githubLink = githubLink
        this.languages = languages
    }
}

export var projects = [ 
    new Project("Dog Breed Classifier", <img className="project-image" src={githubLogo}></img>,"ML Neural Network that classifies over 120 different dog breeds", "https://github.com/jjohn49/Dog-Breed-Classifier-ML", "Python, Sci-kit Learn, Tensorflow, Keras, Pandas"),
    new Project("Split App", <img className="project-image" src={githubLogo}></img>, "iOS App that makes splitting bills easy amongst friends", "https://github.com/jjohn49/SplitApp", "Swift, SwiftUI, NodeJS, JavaScript, REST API, MongoDB"),
    new Project("Roommate Matcher",  <img className="project-image" src={githubLogo}></img>, "Roommate matching website and Algorithm for students at Villanova (Partnered with Villanova)", "https://github.com/Software-Development-Society/roommate-matcher", "Java, Springboot, Groovy, Gradle, JavaScript, EJS, HTML, CSS"),
    new Project("Tracker", <img className="project-image" src={githubLogo}></img>, "iOS App that tracks your daily macronutrients and uploads to Apple Health", "https://github.com/jjohn49/Tracker", "Swift, SwiftUI, Apple Health", "REST API"),
    new Project("ChessPP", <img className="project-image" src={githubLogo}></img>, "A chess game made with C++!", "https://github.com/jjohn49/ChessPP", "Game Development, C++, SDL2, CMake, Linux"),
    
]
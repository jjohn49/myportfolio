
export class Project{
    title: string
    image: string
    description: string
    githubLink:string
    languages:string

    constructor(name: string, image: string, description:string, githubLink:string, languages:string){
        this.title = name
        this.image = image
        this.description = description
        this.githubLink = githubLink
        this.languages = languages
    }
}
export var projects = [ 
    new Project("Dog Breed Classifier", "/src/assets/github_git_hub_logo_icon_132878.png","ML Neural Network that classifies over 120 different dog breeds", "https://github.com/jjohn49/Dog-Breed-Classifier-ML", "Python, Sci-kit Learn, Tensorflow, Keras, Pandas"),
    new Project("Split App", "/src/assets/github_git_hub_logo_icon_132878.png", "iOS App that makes splitting bills easy amongst friends", "https://github.com/jjohn49/SplitApp", "Swift, SwiftUI, NodeJS, JavaScript, REST API, MongoDB"),
    new Project("Roommate Matcher",  "/src/assets/github_git_hub_logo_icon_132878.png", "Roommate matching website and Algorithm for students at Villanova (Partnered with Villanova)", "https://github.com/Software-Development-Society/roommate-matcher", "Java, Springboot, Groovy, Gradle, JavaScript, EJS, HTML, CSS"),
    new Project("Tracker", "/src/assets/github_git_hub_logo_icon_132878.png", "iOS App that tracks your daily macronutrients and uploads to Apple Health", "https://github.com/jjohn49/Tracker", "Swift, SwiftUI, Apple Health, REST API"),
    new Project("ChessPP", "/src/assets/github_git_hub_logo_icon_132878.png", "A chess game made with C++!", "https://github.com/jjohn49/ChessPP", "Game Development, C++, SDL2, CMake, Linux"),
    
]
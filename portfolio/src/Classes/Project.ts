import { ParentObject } from "./ParentObject"

export class Project extends ParentObject{
    
    githubLink:string
    constructor(name: string, image: string, blurb:string, description:string, githubLink:string, languages:string[]){
        super(name, image, image, blurb, description, languages)
        this.githubLink = githubLink
    }
}

let temp = "The most famous poem from Whitman’s celebrated Leaves of Grass, and selected by Jay Parini as the best American poem of all time. “Whitman reinvents American poetry in this peerless self-performance,” Parini writes, “finding cadences that seem utterly his own yet somehow keyed to the energy and rhythms of a young nation waking to its own voice and vision. He calls to every poet after him, such as Ezra Pound, who notes in “A Pact” that Whitman “broke the new wood."
export var projects = [ 
    new Project("Dog Breed Classifier", "/src/assets/github_git_hub_logo_icon_132878.png","ML Neural Network that classifies over 120 different dog breeds", temp,"https://github.com/jjohn49/Dog-Breed-Classifier-ML", ['Python', 'Sci-kit Learn', 'Tensorflow', 'Keras', 'Pandas']),
    new Project("Split App", "/src/assets/github_git_hub_logo_icon_132878.png", "iOS App that makes splitting bills easy amongst friends", temp,"https://github.com/jjohn49/SplitApp", ["Swift", 'SwiftUI', 'NodeJS', 'JavaScript', 'REST API', "MongoDB"]),
    new Project("Roommate Matcher",  "/src/assets/github_git_hub_logo_icon_132878.png", "Roommate matching website and Algorithm for students at Villanova (Partnered with Villanova)", temp, "https://github.com/Software-Development-Society/roommate-matcher", ["Java", 'Springboot', 'Groovy', 'Gradle', 'JavaScript', 'EJS', 'HTML', "CSS"]),
    new Project("Tracker", "/src/assets/github_git_hub_logo_icon_132878.png", "iOS App that tracks your daily macronutrients and uploads to Apple Health", temp, "https://github.com/jjohn49/Tracker", ["Swift", 'SwiftUI', 'Apple Health', "REST API"]),
    new Project("ChessPP", "/src/assets/github_git_hub_logo_icon_132878.png", "A chess game made with C++!", temp, "https://github.com/jjohn49/ChessPP", ["Game Development", 'C++', 'SDL2', 'CMake', "Linux"]),
    
]
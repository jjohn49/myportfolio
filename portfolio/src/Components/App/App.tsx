//import { useState } from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Banner } from '../Banner/Banner'
import { ExperienceList } from '../ExperienceList/ExperienceList'
import { Overlay } from '../Overlay/Overlay'
import { ProjectList } from '../ProjectList/ProjectList'
import './App.css'
import { Experience } from '../../Classes/Experience/Experience'
import { Project } from '../../Classes/Project/Project'

function App() {

  const [isOverlayOpen, setOverlayOpen] = useState(true)
  //const [overlayObject, setOverlayObject]: [Project|Experience|null,Dispatch<SetStateAction<Project|Experience|null>>] = useState(null)

  const onOverlayClosed = ()=>{
    setOverlayOpen(false)
  }

  /*const setOverlayObjectCallback = (object: )=>{
    setOverlayObject(object)
  }*/
  
  return (
    <div id='app'>
      <Banner></Banner>
      <ExperienceList></ExperienceList>
      <ProjectList></ProjectList>
      <Overlay isOpen={isOverlayOpen} onClose={onOverlayClosed} object={overlayObject}></Overlay>
    </div>
  )
}

export default App

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


  const [appStyle, setAppStyle] = useState('')
  //const [isOverlayOpen, setOverlayOpen] = useState(true)
  const [overlayObject, setOverlayObject] = useState<Experience | Project | null>(null)

  const onOverlayClosed = ()=>{
    setOverlayObject(null)
  }

  const setOverlayObjectCallback = (object: Experience | Project | null)=>{
    //console.log("Object is nowset to: " + object)
    setAppStyle('blur')
    setOverlayObject(object)
  }
  
  return (
    <div id='app'>
        <Overlay onClose={onOverlayClosed} object={overlayObject}></Overlay>
      <div id='normal-content' className={appStyle}>
        <Banner></Banner>
        <ExperienceList setOverlayObject={setOverlayObjectCallback}></ExperienceList>
        <ProjectList setOverlayObject={setOverlayObjectCallback}></ProjectList>
      </div>
    </div>
  )
}

export default App

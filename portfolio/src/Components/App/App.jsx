//import { useState } from 'react'
import { Banner } from '../Banner/Banner'
import { ExperienceList } from '../ExperienceList/ExperienceList'
import { ProjectList } from '../ProjectList/ProjectList'
import './App.css'

function App() {
  

  return (
    <div id='app'>
      <Banner></Banner>
      <ExperienceList></ExperienceList>
      <ProjectList></ProjectList>
    </div>
  )
}

export default App

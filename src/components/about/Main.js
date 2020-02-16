import React from 'react'
import HowItAllStarted from './HowItAllStarted'
import Navigation from './Navigation'
import Projects from '../projects/MainProjects'
const Main = (props) => {
    const {howitallstarted, mission, vision, values} = props;
  return (
    <>
        <HowItAllStarted dataContent={howitallstarted}/>
        <Navigation 
            dataMission={mission}
            dataVision={vision}
            dataValues={values}
            />
        <Projects />
    </>
  )
}


export default Main
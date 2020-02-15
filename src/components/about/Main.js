import React from 'react'
import HowItAllStarted from './HowItAllStarted'
import Navigation from './Navigation'
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
    </>
  )
}


export default Main
import React from 'react'
import HowItAllStarted from './HowItAllStarted'
import Navigation from './Navigation'
// import { Image} from "react-bootstrap"

// import flag from '../../img/busoga-flag.png'
import styled from 'styled-components'
// import TestJoin from '../join/TestJoin'
// import Projects from '../projects/MainProjects'

// const GroupeImage = styled(Image)`
//   width: 100%;
// `

const FlagWrapper = styled.div`
  width: 100%;
`

const Blue = styled.div`
  background-color: blue;
  height: 20vh;
`

const Yellow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: yellow;
  height: 20vh;
`

const Maroon = styled.div`
  background-color: maroon;
  height: 20vh;
`

const Headline = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  color: white;
  background-color: blue;
  border: 5px solid white;
  border-radius: 150px;

  @media (max-width: 768px) {
    font-size: 26px;
    width: 150px;
    height: 150px;
    border: 5px solid white;
    border-radius: 100px;
  }
`



const Main = (props) => {
    const {howitallstarted, mission, vision, values} = props;
  return (
    <>
        {/* <GroupeImage src={flag} alt="busoga flag" /> */}

        <FlagWrapper>
          <Blue />
          <Yellow>
            <Headline>
              About us
            </Headline>
          </Yellow>
          <Maroon />
        </FlagWrapper>

        <HowItAllStarted dataContent={howitallstarted}/>
        <Navigation 
            dataMission={mission}
            dataVision={vision}
            dataValues={values}
            />
        {/* <Projects /> */}
        {/* <TestJoin /> */}
    </>
  )
}


export default Main
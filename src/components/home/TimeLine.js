import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Row, Col, Container} from "react-bootstrap"

const Wrapper = styled.div`
    width: 100%;
    background-color: sandybrown;
`

const Heading = styled.h2`
    font-size: 40px;
    color: white;
    text-align: center;
`

const SubHeading = styled.h2`
    font-size: 36px;
    color: white;
    text-align: center;
`

const TimeLineContent = styled.div`
    color: white
    font-size: 22px;
    text-align: center;
    font-weight: 600;
`

const Year = styled.div`
color: white
font-size: 26px;
text-align: center;
font-weight: 600;
`

const TimeLine = ({timeLine}) => {
    const {timeLine} = props;
     return(
        <Wrapper>
        <Heading>{timeLine}</Heading>
        <SubHeading>2014 ---------- 2020</SubHeading>
        <Year>2014</Year>
        <TimeLineContent>started the bunda organasitation</TimeLineContent>
        <TimeLineContent>started the bunda organasitation</TimeLineContent>
    </Wrapper>
    )
}

// Testimonials.propTypes = {
//     Testimonials: PropTypes.arrayOf(
//       PropTypes.shape({
//         quote: PropTypes.string,
//         author: PropTypes.string,
//       })
//     ),
//   }
  
  export default TimeLine
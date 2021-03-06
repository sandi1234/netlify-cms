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

// function CheckYear(props){
//     const {year} = props;
//     var count = 0;

//     for(var i = 0; i < year.length; i++){
//         count += count;
//     }

//     return(
//         <>
//         {count}
//         {year}
//         </>
//     )
// }

function ContentTimeLine(props){
    const {timeline, year} = props;

    var count = 0;
    console.log(typeof year);
    for(var i = 0; i < year.length; i++){
        // var thisYear = year;
        if(year === "2015") {
            count ++;
        }
    }

    return(
        <>
        {/* <CheckYear year={year} /> */}
        {year}<br></br>
        {count}
        <Year>{year ? timeline.year : ''}</Year>
        <TimeLineContent>{timeline.content}</TimeLineContent>
        </>
    )
}

const TimeLine = ({timeLine}) => {
     return(
        <Wrapper>
        <Heading>{timeLine.heading}</Heading>
        <SubHeading>{timeLine.subHeading}</SubHeading>
        {timeLine.contentTimeLine.map((timeline, index ) => (
            <ContentTimeLine key={index} timeline={timeline} year={timeline.year} />
        ))}
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
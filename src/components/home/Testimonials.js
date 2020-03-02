import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col, Container} from "react-bootstrap"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { v4 } from 'uuid'

const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    padding: 4%;
    background-color: deepskyblue;
`

const CustomCard = styled.article`
    width: 300px;
    height: auto;
    padding: 15px;
    color: white;
    background-color: deepskyblue;
    border-radius: 5px;
    border: 2px solid white;
`

const CustomBody = styled.div`


`
const CustomQuote = styled(FontAwesomeIcon)`
    width: 13%;
    margin-bottom: 15px;
    color: white;
`

const CustomAuthor = styled.div`
    margin-top: 15px;
`

const Heading = styled.h2`
    // text-align: center;
    font-size: 40px;
    color: white;

`

const SubHeading = styled.h3`
    // text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
`

const CustomHr = styled.div`
    width: 10%;
    color:white;
    border: 4px solid white;
    border-radius: 5px;
    margin-bottom: 20px; 
`


const Testimonials = ({testimonials}) => {
    
    // const {testimonials} = props;

    return(
         <Wrapper>
    <Container>
        <Heading> Testimonials</Heading>
        <SubHeading> What They say</SubHeading>
        <CustomHr />
        <Row>
            {testimonials.map((testimonial, index) => (
            <Col key={index} lg={4} md={4} sm={12}>
                    <CustomCard >
                        <CustomQuote icon={faQuoteRight} />
                        <CustomBody>
                        {testimonial.quote}
                        <br />
                        <CustomAuthor> – {testimonial.author}</CustomAuthor>
                        </CustomBody>
                    </CustomCard>
            </Col>
                ))}     
        </Row>
    </Container>
  </Wrapper> 
    )

}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials

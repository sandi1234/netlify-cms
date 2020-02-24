import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col, Container} from "react-bootstrap"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { v4 } from 'uuid'

const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    padding: 4%;
    background-color: #ccc;;
`

const CustomCard = styled.article`
    width: 300px;
    height: auto;
    padding: 15px;
    background-color: white;
`

const CustomBody = styled.div`

`
const CustomQuote = styled(FontAwesomeIcon)`
    font-size: 30px;
    margin-bottom: 15px;
`

const CustomAuthor = styled.div`
    margin-top: 15px;
`

const Heading = styled.h2`
    // text-align: center;
    font-size: 40px;
`

const SubHeading = styled.h3`
    // text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
`


const Testimonials = ({ testimonials }) => (
  <Wrapper>
    <Container>
        <Heading> Testimonials</Heading>
        <SubHeading> What They say</SubHeading>
        <Row>
            {testimonials.map(testimonial => (
            <Col lg={4} md={4} sm={12}>
                    <CustomCard key={v4()} className="message">
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

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials

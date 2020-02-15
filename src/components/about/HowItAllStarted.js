import React from "react"
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components';

const CustomContainer = styled(Container)`

`

const Headline = styled.div`
    font-family: "FF Mark", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 50px 0px 50px 0px;
    text-align: center;
`




const HowItAllStarted = (props) => {
    const {dataContent } = props;
  return (
    <CustomContainer>
        <Headline>{dataContent.heading}</Headline>
        <Row>
            <Col lg={6} md={6} sm={12}>
                {dataContent.collumLeft}
            </Col>
            <Col lg={6} md={6} sm={12}>
                {dataContent.collumRight}
            </Col>
        </Row>
    </CustomContainer>
    )
}



export default HowItAllStarted

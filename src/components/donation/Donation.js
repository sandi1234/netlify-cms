import React from "react"
import {Link } from "gatsby"
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components'
import { faDonate } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const ContentWraper = styled.div`
padding: 25px 0px 105px 0px;
text-align: center;
`

const ButtonLinkIntro = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 100%;
background-color: transparent;
border: 1px solid white;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: #5cb85c;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #5cb85c;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const DonationDonate = styled(FontAwesomeIcon)`
    font-size: 200px;
    color: #5cb85c;
    margin-bottom: 10px;

`

const Donation = (props) => {
    // const {
    //         donateText, 
    //         donateUrl, 
    //     } = props;

    return (
  <ContentWraper>
       <Container>
        <Row className="justify-content-md-center">
            <Col lg={6} md={6} sm={6}>
            <DonationDonate icon={faDonate} />
                <ButtonLinkIntro to="/" className="text-uppercase"  variant="primary" size="lg" block>
                    Donate to empower
                </ButtonLinkIntro>
            </Col>
        </Row>
    </Container>
  </ContentWraper>
)

}


export default Donation

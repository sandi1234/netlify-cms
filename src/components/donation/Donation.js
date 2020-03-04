import React from "react"
import {Link } from "gatsby"
// import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components'
import { faDonate } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const ContentWraper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
`

const ButtonLink = styled(Link)`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, 0%);
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 2.3vw;
font-style: normal;
font-weight: 600;
color: white;
display: block;
text-transform: uppercase;
width: 33%;
background-color: transparent;
// background-color: deepskyblue;
border: 1px solid white;
border-radius: 45px;
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

@media (max-width: 768px) {
    font-size: 2.9vw;
    width: 50%;
  }
`

const DonationDonate = styled(FontAwesomeIcon)`
    font-size: 200px;
    color: #5cb85c;
    display: inline-block;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 130px;
      }

`

const Donation = (props) => {

    return (
  <ContentWraper>
            <DonationDonate icon={faDonate} />
                <ButtonLink to="/">
                    Donate to empower
                </ButtonLink>
  </ContentWraper>
)

}


export default Donation

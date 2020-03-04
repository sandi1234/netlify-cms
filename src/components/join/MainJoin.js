import React from "react"
import { Row, Col} from "react-bootstrap"
import styled from 'styled-components'
import { Link } from 'gatsby'

const CustomCol = styled(Col)`
&:hover{
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25) !important;
}
`

const CustomCard = styled.div`
    width: 100%;
    margin: 80px 0px 80px 0px;
    padding: 75px 0;
    color: white;
    min-height: 270px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    // &:hover{
    //     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    // }
`

const SectionBackgroundColor = styled.div`
width: 100%;
margin:0 auto;
background-color: skyblue;
`

const BtnLink = styled(Link)`
font-size: 16px;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 41.5%;
// background-color: blue;
border: 1px solid white;
border-radius: 25px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: ghostwhite;
    background-color: rgba(0, 0, 0, 0.15);
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}

@media (max-width: 768px) {
    width: 46%;
}
`

const CenterBtn = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    text-align: center;
    bottom: 30px;
    width: 100%;

    @media (max-width: 768px) {
            bottom: 20px;
       }
`

const Title = styled.h2`
    text-align: center;
    font-size: 36px;
`

const BodyText = styled.p`
    font-size: 20px;
`

const CustomBody = styled.div`
    padding: 15px;
`


const MainJoin = (props) => {
    const {team, partner} = props;


    return (
    <SectionBackgroundColor>
    {/* <ContainerWrapper> */}
      <Row>
        <CustomCol lg={6} md={6} sm={12} className="pr-0 bg-success">
        <CustomCard>
            <CustomBody>
                <Title>{team.heading}</Title>
                <BodyText>
                    {team.content}
                </BodyText>
                <CenterBtn>
                    <BtnLink to="#">
                        {team.btnText}
                    </BtnLink>
                </CenterBtn>
                {/* <Button variant="primary">{team.btnText}</Button> */}
            </CustomBody>
        </CustomCard>
        </CustomCol>
        <CustomCol lg={6} md={6} sm={12} className="bg-warning">
        <CustomCard>
            <CustomBody>
                <Title>{partner.heading}</Title>
                <BodyText>
                    {partner.content}
                </BodyText>
                <CenterBtn>
                    <BtnLink to="#">
                         {partner.btnText}
                    </BtnLink>
                </CenterBtn>
                {/* <Button variant="primary">{partner.btnText}</Button> */}
            </CustomBody>
        </CustomCard>
        </CustomCol>
      </Row>
    {/* </ContainerWrapper> */}
    </SectionBackgroundColor>
)

} 


export default MainJoin

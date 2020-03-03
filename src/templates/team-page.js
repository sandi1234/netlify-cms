import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {Row, Col, Container, ListGroup, ListGroupItem, Card, Image} from "react-bootstrap"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import groupImage from '../img/group-image.jpg'
import styled from 'styled-components'


const Wrapper = styled.div`
  margin: 0px 0px 100px 0px;
`

const GroupeImage = styled(Image)`
  width: 100%;
  margin-bottom: 100px;
`

const CustomFont = styled(FontAwesomeIcon)`
  width: 13%
`


function Member(props){
  const {member} = props;
  return(
    <Col lg={4} md={4} sm={12}>
      <Card>
        <Card.Img variant="top" src={!! member.image.childImageSharp ? member.image.childImageSharp.fluid.src : member } alt={member.name} />
        <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
        <Card.Text>
          {member.description}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><CustomFont icon={faMobileAlt} /> {member.phone}</ListGroupItem>
          <ListGroupItem><CustomFont icon={faEnvelope} />  {member.mail}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}

export const TeamPageTemplate = ({
  title,
  teammembers,
  groupImage
}) => (
    <Wrapper>
        <GroupeImage src={!! groupImage.childImageSharp ? groupImage.childImageSharp.fluid.src : groupImage } alt="group image" />
      <Container>
      <Row>
         {teammembers.members.map((member, index) => (
            <Member key={index} member={member} />
          ))} 
       </Row>
      </Container>
    </Wrapper>
  )

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  groupImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  teammembers: PropTypes.object,
}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        groupImage={frontmatter.groupImage}
        teammembers={frontmatter.teammembers}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage{
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
      title
      groupImage {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      teammembers{
         members{
              image {
              childImageSharp {
                fluid(maxWidth: 150, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          mail
          name
          title
          description
          phone
        }
      }
       
      }
    }
  }
`

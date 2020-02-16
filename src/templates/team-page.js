import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {Row, Col, Container, ListGroup, ListGroupItem, Card} from "react-bootstrap"



function Member(props){
  const {member} = props;
  return(
    <Col lg={3} md={4} sm={12}>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
        <Card.Text>
          {member.description}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Phone: {member.phone}</ListGroupItem>
          <ListGroupItem>E-mail: {member.mail}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}

export const TeamPageTemplate = ({
  title,
  teammembers
}) => (
    <>
    <Container>
      <Row>
         {teammembers.members.map((member, index) => (
            <Member key={index} member={member} />
          ))} 
       </Row>
    </Container>
    </>
  )

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  teammembers: PropTypes.object,

}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
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
      teammembers{
         members{
        #   image {
        #   childImageSharp {
        #     fluid(maxWidth: 150, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
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

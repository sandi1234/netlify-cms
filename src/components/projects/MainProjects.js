import React from 'react'
import PropTypes from 'prop-types'
import {graphql, StaticQuery, Link} from 'gatsby'
import { Row, Col, Container} from "react-bootstrap"
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.3rem;

`

const Image = styled.img`
    width: 100%;
`

const CustomContainer = styled(Container)`
    padding-top: 50px;
`
const CustomRow = styled(Row)`
    margin-bottom: 50px;
    &:hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        
  
    }

    &:h3{
        color: green;
    } 
 

`

const LearnMore = styled(Link)`
position: absolute;
bottom: 10px;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
text-align: center;
font-size: 1rem;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 90%;
background-color: #28a745;
border: 1px solid white;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;

&:hover{
    color: whitesmoke;
    background-color: #5cb85c;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

function ProjectLeft(props) {
    const {project} = props;
    return(
      <Col lg={6} md={6} sm={12} className="mb-5">
      <CustomRow key={project.id}>
          <Col lg={6} md={6} sm={12} className="pl-0">
            <Image src={!! project.frontmatter.featuredimage ? project.frontmatter.featuredimage.childImageSharp.fluid.src : project} alt={project.frontmatter.title} />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Title>{project.frontmatter.title}</Title>
            <div dangerouslySetInnerHTML={{__html: project.frontmatter.description}} />
              <LearnMore to={`/${project.fields.slug}`} className="text-uppercase"  variant="primary" size="lg" block>
                    Learn More 
              </LearnMore>
          </Col>
      </CustomRow>
  </Col>
    )
}

function ProjectRight(props) {
  const {project} = props;
  // const testTrol = truncate(project.frontmatter.title, 10);

  
  return(
    <Col lg={6} md={6} sm={12} className="mb-5">
    <CustomRow key={project.id}>
        <Col lg={6} md={6} sm={12}>
          <Title>{project.frontmatter.title}</Title>
            <div dangerouslySetInnerHTML={{__html: project.frontmatter.description}} />
            <LearnMore to={`/${project.fields.slug}`} className="text-uppercase"  variant="primary" size="lg" block>
              Learn More 
            </LearnMore>
        </Col>
        <Col lg={6} md={6} sm={12} className="pr-0">
            <Image src={!! project.frontmatter.featuredimage ? project.frontmatter.featuredimage.childImageSharp.fluid.src : project} alt={project.frontmatter.title} />
        </Col>
    </CustomRow>
</Col>
  )
}

function ProjectPlacement(props){
  const {item, index} = props;
  if(index % 2 === 0) {
    return <ProjectLeft project={item} />
  }
    return <ProjectRight project={item} />
}


class MainProjects extends React.Component{
    render() {
        const { data } = this.props
        const { edges: projects } = data.allMarkdownRemark
    return (
        
           <CustomContainer>
            <h1 className="text-center mb-5 mt-2">Ongoing Projects</h1>
              <Row>
              {projects && projects.map(({node: projectItem}, index) => (
                <ProjectPlacement key={projectItem.id} item={projectItem} index={index} />
              ))}
              </Row> 
            </CustomContainer >
        )
    }
}


MainProjects.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  
  export default () => (
    <StaticQuery
      query={graphql`
        query MainProjectsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "project-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  description
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 300, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <MainProjects data={data} count={count} />}
    />
  )
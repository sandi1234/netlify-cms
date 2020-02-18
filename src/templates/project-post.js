import React from 'react'
import PropTypes from 'prop-types'
import { graphql} from 'gatsby'
// import styled from 'styled-components';
import {Container} from "react-bootstrap"
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
import ProjectPostContent from '../components/projects/ProjectPostContent'


export const ProjectPostTemplate = ({
  description,
  date,
  // tags,
  title,
  helmet,
}) => {

  return (
    <ProjectPostContent 
      title={title}
      date={date}
      description={description}
    />
  )
}

ProjectPostTemplate.propTypes = {
  // content: PropTypes.node.isRequired,
  // contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: Project } = data

  return (
    <Layout>
    <Container className="bg-success">   
      <ProjectPostTemplate
        //  content={Project.html}
         date={Project.frontmatter.date}
        //  contentComponent={HTMLContent}
         description={Project.frontmatter.description}
        //  tags={Project.frontmatter.tags}
         title={Project.frontmatter.title}
      />
      </Container>
    </Layout>
  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

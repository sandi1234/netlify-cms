import React from 'react'
import PropTypes from 'prop-types'
import { graphql} from 'gatsby'
// import styled from 'styled-components';
import {Container} from "react-bootstrap"
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ProjectPostContent from '../components/projects/ProjectPostContent'


export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
}) => {
  return (
    <ProjectPostContent 
      title={title}
      tags={tags}
      description={description}
      content={content}
      contentComponent={contentComponent}
    />
  )
}

ProjectPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: Project } = data

  return (
    <Layout>
    <Container>   
      <ProjectPostTemplate
         content={Project.html}
         date={Project.frontmatter.date}
         contentComponent={HTMLContent}
         description={Project.frontmatter.description}
         tags={Project.frontmatter.tags}
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

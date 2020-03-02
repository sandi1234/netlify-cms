import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Main from '../components/about/Main'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
  title,
  howitallstarted,
  mission,
  vision,
  values
}) => {

  return (
      <Main 
        title={title}
        howitallstarted={howitallstarted} 
        mission={mission}
        vision={vision}
        values={values}
        />
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  howitallstarted: PropTypes.object,
  mission: PropTypes.object,
  vision: PropTypes.object,
  values: PropTypes.object,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        howitallstarted={frontmatter.howitallstarted}
        mission={frontmatter.mission}
        vision={frontmatter.vision}
        values={frontmatter.values}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        # How it all started
        howitallstarted{
          heading
          collumLeft
          collumRight
        }
        # Mission
        mission{
          title
          collum1
          collum2
          collum3
        }
        # Vision
        vision{
          title
          collum1
          collum2
          collum3
        }
        # Values
        values{
          title
          collum1
          collum2
          collum3
        }

      }
    }
  }
`

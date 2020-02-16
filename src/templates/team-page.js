import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TeamPageTemplate = ({
  title,
  teammembers
}) => (
    <>
    <div>
    {title}
      <div>
        {teammembers.members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </div>
    </div>
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
      html
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

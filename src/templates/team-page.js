import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TeamPageTemplate = ({
  title,
  team
}) => (
    <>
    <div>
    {title}
      <div>
        {team.teammembers.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </div>
    </div>
    </>
  )

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  team: PropTypes.object,

}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        team={frontmatter.team}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
      title
      team{
         teammembers{
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

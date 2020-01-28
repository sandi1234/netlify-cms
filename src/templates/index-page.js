import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const LandingImage = styled.div`
margin-top: -100px;
height: 100vh;
`

const MainContentWrapper = styled(Container)`
  padding-top: 20%;
`;

const Heading = styled.h1`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 5rem;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`

const SubHeading = styled.h2`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3.5rem;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`

const ButtonLinkIntro = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 100%;
background-color: transparent;
border: 1px solid white;
border-radius: 5px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: ghostwhite;
    background-color: rgba(0, 0, 0, 0.3);
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <LandingImage
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', 
        backgroundSize: "cover",
      }}
    >
    <MainContentWrapper>
           <Row>
              <Col lg={12} md={12} sm={12}>
                  <Heading className="text-uppercase text-center">{title}</Heading>     
                  <SubHeading className="text-uppercase text-center mb-5">{subheading}</SubHeading>     
                  <Row className="justify-content-md-center">
                      <Col lg={6} md={6} sm={6} className="text-center">
                          <ButtonLinkIntro to="#"className="text-uppercase"  variant="primary" size="lg" block>
                            Get involved
                          </ButtonLinkIntro>
                      </Col>                 
                  </Row>
              </Col>
        </Row>
    </MainContentWrapper>
    </LandingImage>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from 'styled-components';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

const LandingImage = styled.div`
margin-top: -100px;
height: 100vh;
`

const MainContentWrapper = styled(Container)`
  // Somthing Special
`;

const MainHeading = styled.h1`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 6vw;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`

const SubHeading = styled.h2`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3.8vw;
font-style: normal;
font-weight: 900;
letter-spacing: -0.03125em;
line-height: 1.06;
color: white;
`

const ButtonLinkIntro = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3vw;
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

const CustomCard = styled(Card)`
    margin: 40px 0px 40px 0px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    // box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border: 0px solid black;
    border-radius: 0px;

`

const Heading = styled.h1`
text-transform: uppercase;
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 3rem;
font-style: normal;
font-weight: 600;
letter-spacing: -0.03125em;
line-height: 1.06;
color: black;
text-align: center;
padding: 20px 0px 10px 0px;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    // transform: skew(180deg,190deg);
    // transform: rotateY(20deg);
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainIntro,
  whoweare,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <LandingImage
      style={{
        backgroundImage: `url(${
          !!mainIntro.image.childImageSharp ? mainIntro.image.childImageSharp.fluid.src : mainIntro.image
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', 
        backgroundSize: "cover",
      }}
    >
    <MainContentWrapper className="h-100">
           <Row className="h-100 justify-content-center align-items-center">
              <Col lg={12} md={12} sm={12}>
                  <MainHeading className="text-uppercase text-center">{mainIntro.heading}</MainHeading>     
                  <SubHeading className="text-uppercase text-center mb-5">{mainIntro.subheading}</SubHeading>     
                  <Row className="justify-content-md-center">
                      <Col lg={6} md={6} sm={6} className="text-center">
                          <ButtonLinkIntro to="#"className="text-uppercase"  variant="primary" size="lg" block>
                            {mainIntro.btnText}
                          </ButtonLinkIntro>
                      </Col>                 
                  </Row>
              </Col>
        </Row>
    </MainContentWrapper>
    </LandingImage>
    <Container>
      <Row>
      <CustomCard>
        <Row>
        <Col className="mb-3" lg={8} md={6} sm={12}>
            <Card.Body>
            <Heading>
                {whoweare.heading}
            </Heading>
                <Card.Text>
                <Row>
                    <Col className="mb-3" lg={6} md={6} sm={12}>
                    {whoweare.col1}
                    </Col>
                    <Col className="mb-3" lg={6} md={6} sm={12}>
                    {whoweare.col2}
                    </Col>
                    <Col className="mb-3" lg={12} md={12} sm={12}>
                    {whoweare.col3}
                    <ButtonLinkIntro to={whoweare.btnLink} className="text-uppercase text-center"  variant="primary" size="lg" block>
                        {whoweare.btnText}
                    </ButtonLinkIntro>
                    </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
            </Col>
            <Col lg={4} md={6} sm={12}>
          <Image src={whoweare.image.childImageSharp.fluid.src} alt="Something"/>
        </Col>
        </Row>
    </CustomCard>
      </Row>
    </Container>
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
  mainIntro: PropTypes.object,
  whoweare: PropTypes.object,
  team: PropTypes.object,
  partner: PropTypes.object,
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
        mainIntro={frontmatter.mainIntro}
        whoweare={frontmatter.whoweare}
        team={frontmatter.team}
        partner={frontmatter.partner}
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
        # Main Intro
        mainIntro{
          image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        btnText

        }
        # Main Who We Are
        whoweare{
          image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
          col1
          col2
          col3
          heading
          btnText
          btnLink
        }
        # Team
        team{
          image{
              childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          content
          btnText
          btnLink
        }
        # Partner
        partner{
          image{
              childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          content
          btnText
          btnLink
        }
        # Something
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

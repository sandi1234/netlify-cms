import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from 'styled-components';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import MainJoin from '../components/join/MainJoin'
import MainProjects from '../components/projects/MainProjects'
import Testimonials from '../components/home/Testimonials'
import Flag from '../img/ugandan-flag.png'
import { faUsers, faHandshake, faProjectDiagram, faDonate} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LandingImage = styled.div`
margin-top: -100px;
height: 100vh;
`

const TestTrol = styled.div`
width: 100%;
height: 100vh;
background: rgb(232,212,123);
background: radial-gradient(circle, rgba(232,212,123,1) 0%, rgba(231,129,50,0.938813025210084) 35%, rgba(25,25,23,1) 100%);// background: rgb(247,191,102);
// background: linear-gradient(90deg, rgba(247,191,102,0.9023984593837535) 0%, rgba(255,221,119,0.9304096638655462) 0%, rgba(242,190,107,0.8855917366946778) 100%);
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

const CenterBtn = styled.div`
  margin: 40px auto;
  width: 60%;

`

const WhoWeAreButton = styled(Link)`
font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 600;
color: white;
display: block;
width: 100%;
background-color: green;
border: 0px solid black;
border-radius: 45px;
padding: 15px 30px 15px 30px;
text-decoration: none;
&:hover{
    color: white;
    // background: rgb(40,167,69);
    // background: linear-gradient(90deg, rgba(40,167,69,1) 25%, rgba(255,193,7,1) 75%);
    // background: rgb(124,251,63);
    // background: radial-gradient(circle, rgba(124,251,63,1) 0%, rgba(252,244,70,1) 100%);
    background: darkgreen;
}

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const CustomCard = styled(Card)`
    margin: 42px 0px 40px 0px;
    font-size: 22px;
    // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    // box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border: 0px solid black !important;
    border-radius: 0px;

`

const Heading = styled.h1`
text-transform: uppercase;
// font-family: "FF Mark", Helvetica, Arial, sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 1.06;
color: black;
// text-align: center;
padding: 20px 0px 10px 0px;
`

// const Image = styled.img`
//     width: 100%;
//     height: auto;
//     // transform: skew(180deg,190deg);
//     // transform: rotateY(20deg);
// `

const CustomBox= styled.div`
  // margin-top: 10px;
  width: 80%;
  border: 1px solid #ccc;
  padding: 10px;
`


const CustomBoxWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`

const CustomBoxIcon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 75px;

`

const CustomBoxNumber = styled.div`
  width: 100%;
`

const CustomBoxText = styled.div`
  width: 100%;
  text-transform: uppercase;
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainIntro,
  whoweare,
  team,
  partner,
  testimonials,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <LandingImage
      style={{
        backgroundImage: `url(${
          Flag})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', 
        backgroundSize: "cover",
      }}
    >
    <TestTrol>
    <MainContentWrapper className="h-100">
           <Row className="h-100 justify-content-center align-items-center">
              <Col lg={12} md={12} sm={12}>
                  <MainHeading className="text-uppercase text-center">{mainIntro.heading}</MainHeading>     
                  <SubHeading className="text-uppercase text-center mb-5">{mainIntro.subheading}</SubHeading>     
                  <Row className="justify-content-md-center">
                      <Col lg={6} md={6} sm={6} className="text-center">
                          <ButtonLinkIntro to="#" className="text-uppercase"  variant="primary" size="lg" block>
                            {mainIntro.btnText}
                          </ButtonLinkIntro>
                      </Col>                 
                  </Row>
              </Col>
        </Row>
    </MainContentWrapper>
        </TestTrol>
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

                    <CenterBtn>
                        <WhoWeAreButton to={whoweare.btnLink} className="text-uppercase text-center"  variant="primary" size="lg" block>
                        {whoweare.btnText}
                    </WhoWeAreButton> 
                    </CenterBtn>
                    </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
            </Col>
            <Col lg={4} md={6} sm={12}>
          {/* <Image src={!!whoweare.image.childImageSharp ? whoweare.image.childImageSharp.fluid.src : whoweare.image} alt="Something"/> */}
          <CustomBoxWrapper className="mt-4">
            <CustomBox>
            <CustomBoxIcon icon={faUsers} />
            <CustomBoxNumber>
                 5
            </CustomBoxNumber>
            <CustomBoxText>
              Team Members
            </CustomBoxText>
          </CustomBox>
          </CustomBoxWrapper>
          <CustomBoxWrapper>
            <CustomBox>
            <CustomBoxIcon icon={faHandshake} />
            <CustomBoxNumber>
                 5
            </CustomBoxNumber>
            <CustomBoxText>
              Business Partners
            </CustomBoxText>
          </CustomBox>
          </CustomBoxWrapper>
          <CustomBoxWrapper>
            <CustomBox>
            <CustomBoxIcon icon={faProjectDiagram} />
            <CustomBoxNumber>
                 5
            </CustomBoxNumber>
            <CustomBoxText>
              Projects
            </CustomBoxText>
          </CustomBox>
          </CustomBoxWrapper>

          <CustomBoxWrapper>
            <CustomBox>
            <CustomBoxIcon icon={faDonate} />
            <CustomBoxNumber>
                 $67000
            </CustomBoxNumber>
            <CustomBoxText>
              Donation
            </CustomBoxText>
          </CustomBox>
          </CustomBoxWrapper>

 
        </Col>
        </Row>
    </CustomCard>
      </Row>
    </Container>
    <MainJoin  team={team} partner={partner}/>
    <Testimonials testimonials={testimonials} />
    <MainProjects />
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
  testimonials: PropTypes.object,
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
        testimonials={frontmatter.testimonials}
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
        # Testimonials
        testimonials{
          image{
              childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          quote
          author
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

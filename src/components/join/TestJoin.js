// import React from 'react'
// import PropTypes from 'prop-types'
// import {graphql, StaticQuery, Link} from 'gatsby'
// import { Row, Col} from "react-bootstrap"
// import styled from 'styled-components'

// const CustomCol = styled(Col)`
// &:hover{
//     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25) !important;
// }
// `

// const CustomCard = styled.div`
//     width: 100%;
//     margin: 80px 0px 80px 0px;
//     padding: 75px 0;
//     color: white;
//     height: 300px;
//     // box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
//     // &:hover{
//     //     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
//     // }
// `

// const SectionBackgroundColor = styled.div`
// width: 100%;
// margin:0 auto;
// background-color: skyblue;
// `

// const BtnLink = styled(Link)`
// font-size: 16px;
// font-style: normal;
// font-weight: 600;
// color: white;
// display: block;
// width: 45%;
// // background-color: blue;
// border: 1px solid white;
// border-radius: 25px;
// padding: 15px 30px 15px 30px;
// text-decoration: none;
// &:hover{
//     color: ghostwhite;
//     background-color: rgba(0, 0, 0, 0.15);
// }

// &:focus, &:hover, &:visited, &:link, &:active {
//     text-decoration: none;
// }
// `

// const CenterBtn = styled.div`
//     position: absolute;
//     text-align: center;
//     bottom: 20px;
//     width: 65%;
//     right:25%;
//     left:50%;
//     margin-left:-150px;
// `

// const Title = styled.h2`
//     text-align: center;
//     font-size: 36px;
// `

// const BodyText = styled.p`
//     font-size: 20px;
// `

// const CustomBody = styled.div`
//     padding: 15px;
// `

// class TestJoin extends React.Component{
//     render() {
//         const { data } = this.props
//         const { edges: lort } = data.allMarkdownRemark
//     return (
//         <SectionBackgroundColor>
//         {/* <ContainerWrapper> */}
//           <Row>
//             <CustomCol lg={6} md={6} sm={12} className="pr-0 bg-success">
//             <CustomCard>
//                 <CustomBody>
//                     <Title>{lort.node.frontmatter}</Title>
//                     <BodyText>
//                         {/* {team.node.frontmatter.team.content} */}
//                     </BodyText>
//                     <CenterBtn>
//                         <BtnLink to="#">
//                             {/* {team.node.frontmatter.team.btnText} */}
//                         </BtnLink>
//                     </CenterBtn>
//                     {/* <Button variant="primary">{team.btnText}</Button> */}
//                 </CustomBody>
//             </CustomCard>
//             </CustomCol>
//          {/*    <CustomCol lg={6} md={6} sm={12} className="pl-0 bg-warning">
//             <CustomCard>
//                 <CustomBody>
//                     <Title>{partner.heading}</Title>
//                     <BodyText>
//                         {partner.content}
//                     </BodyText>
//                     <CenterBtn>
//                         <BtnLink to="#">
//                              {partner.btnText}
//                         </BtnLink>
//                     </CenterBtn>
//                     <Button variant="primary">{partner.btnText}</Button> 
//                 </CustomBody>
//             </CustomCard>
//             </CustomCol>*/}
//           </Row>
//         {/* </ContainerWrapper> */}
//         </SectionBackgroundColor>
//         )
//     }
// }


// TestJoin.propTypes = {
//     data: PropTypes.shape({
//       allMarkdownRemark: PropTypes.shape({
//         edges: PropTypes.array,
//       }),
//     }),
//   }
  
//   export default () => (
//     <StaticQuery
//       query={graphql`
//         query TestJoinQuery {
//             allMarkdownRemark(
//             filter: { frontmatter: { templateKey: { eq: "index-page" } } }
//             ){
//         edges {
//         node{
//             id
//                 frontmatter{
//                 title
//                     # Team
//                     team{
//                         heading
//                         content
//                         btnText
//                         btnLink
//                         }
//                     # Partner
//                     partner{
//                     heading
//                     content
//                     btnText
//                     btnLink
//                     }
//                 }
//             }
//         }
//             }
//         }
//       `}
//       render={(data) => <TestJoin data={data} />}
//     />
//   )
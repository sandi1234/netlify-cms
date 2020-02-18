import React from 'react'
import styled from 'styled-components';
import Content from '../Content'
import {Container} from "react-bootstrap"


const CustomContainer = styled(Container)`
    max-width: 920px;
`

const Title = styled.h1`
  font-size: 40px;
  color: #363636;
  font-wieght: 700;
  line-height: 1.125,
`

const Description = styled.p`
  font-size: 16px;
  color: #212529;
  font-wieght: 400;
`

const ProjectPostContent = (props) => {
    const {
      content,
      contentComponent,
        description,
        // tags,
        title,
        } = props;
    const PostContent = contentComponent || Content

  return (
    <CustomContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PostContent content={content} />
    </CustomContainer>
  )
}


export default ProjectPostContent
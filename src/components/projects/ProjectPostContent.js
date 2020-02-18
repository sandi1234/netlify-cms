import React from 'react'
import styled from 'styled-components';
// import Content, { HTMLContent } from '../Content'
import {Container} from "react-bootstrap"


const CustomContainer = styled(Container)`
    width: 50%;
`


const ProjectPostContent = (props) => {
    const {
        description,
        date,
        // tags,
        title,
        } = props;

  return (
    <CustomContainer>
        <h1>{title}</h1>
        <h1>{date}</h1>
        <h1>{description}</h1>
    </CustomContainer>
  )
}


export default ProjectPostContent
import React from "react"
import {Row, Col, Container, Tabs, Tab} from "react-bootstrap"
import styled from 'styled-components';

const CustomContainer = styled(Container)`

`

function Mission(props) {
    const {mission} = props;
    return(
        <Row>
            <Col lg={4} md={4} sm={12}>
                {mission.collum1}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {mission.collum2}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {mission.collum3}
            </Col>
        </Row>
    )
}


function Vision(props) {
    const {vision} = props;
    return(
        <Row>
            <Col lg={4} md={4} sm={12}>
                {vision.collum1}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {vision.collum2}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {vision.collum3}
            </Col>
        </Row>
    )
}

function Values(props) {
    const {values} = props;
    return(
        <Row>
            <Col lg={4} md={4} sm={12}>
                {values.collum1}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {values.collum2}
            </Col>
            <Col lg={4} md={4} sm={12}>
                {values.collum3}
            </Col>
        </Row>
    )
}

const Navigation = (props) => {
    const {dataMission, dataVision, dataValues } = props;

    return (
    <CustomContainer>
        <Tabs defaultActiveKey={dataMission.title} transition={false} id="noanim-tab-example">
        <Tab eventKey={dataMission.title} title={dataMission.title}>
          <Mission mission={dataMission} />
        </Tab>
        <Tab eventKey={dataVision.title} title={dataVision.title}>
          <Vision vision={dataVision} />
        </Tab>
        <Tab eventKey={dataValues.title} title={dataValues.title}>
          <Values values={dataValues} />
        </Tab>
      </Tabs>
    </CustomContainer>
    );
}



export default Navigation

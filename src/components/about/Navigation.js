import React from "react"
import {Row, Col, Container, Tabs, Tab} from "react-bootstrap"
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  font-size: 18px;
  @media (max-width: 768px) {
      font-size: 16px;
    }
`

function Mission(props) {
    const {mission} = props;
    return(
        <Row className="pt-3 pb-3">
            <Col lg={4} md={4} sm={12} className="mb-3">
                {mission.collum1}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {mission.collum2}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {mission.collum3}
            </Col>
        </Row>
    )
}


function Vision(props) {
    const {vision} = props;
    return(
        <Row className="pt-3 pb-3">
            <Col lg={4} md={4} sm={12} className="mb-3">
                {vision.collum1}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {vision.collum2}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {vision.collum3}
            </Col>
        </Row>
    )
}

function Values(props) {
    const {values} = props;
    return(
        <Row className="pt-3 pb-3">
            <Col lg={4} md={4} sm={12} className="mb-3">
                {values.collum1}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {values.collum2}
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
                {values.collum3}
            </Col>
        </Row>
    )
}

const Navigation = (props) => {
    const {dataMission, dataVision, dataValues } = props;

    return (
        <>
    <CustomContainer className="mt-5">
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
    {/* <Tab.Container defaultActiveKey="mission">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="mission">Mission</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="vision">Vision</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="values">Values</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="mission">
            <Mission mission={dataMission} />
        </Tab.Pane>
        <Tab.Pane eventKey="vision">
            <Vision vision={dataVision} />
        </Tab.Pane>
        <Tab.Pane eventKey="values">
            <Values values={dataValues} />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> */}
    </CustomContainer>
    </>
    );
}



export default Navigation

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import { CoordinatesForm } from "./components/CoordinatesForm";
import { CoordinatesList } from "./components/CoordinatesList";

import { Map } from "./components/Map";

function App() {
    const [points, setPoints] = useState([]);

    const [center, setCenter] = useState([32.568883, 34.949582]);

    return (
        <Container>
            <Row>
                <Col>
                    <Tab.Container defaultActiveKey="coords">
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="coords">Weight Factors</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="search">Parameters</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="coords">
                                <CoordinatesForm setPoints={setPoints} setCenter={setCenter} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="search">
                                <div>Imp Search</div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                    <CoordinatesList points={points} setPoints={setPoints} />
                </Col>
                <Col>
                    {" "}
                    <Map points={points} center={center} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;

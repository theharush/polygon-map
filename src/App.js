import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                    <CoordinatesForm setPoints={setPoints} setCenter={setCenter} />
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

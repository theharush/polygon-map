import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import map from "lodash/map";
import Button from "react-bootstrap/Button";
import some from "lodash/some";

export const CoordinatesList = ({ points, setPoints }) => {
    const pointsList = map(points, (point, idx) => (
        <ListGroup.Item key={idx}>
            {point[0]}, {point[1]}
        </ListGroup.Item>
    ));
    return (
        <>
            <ListGroup>{pointsList}</ListGroup>
            {some(points) && <Button onClick={() => setPoints([])}> Clear</Button>}
        </>
    );
};

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import map from "lodash/map";
export const CorrdinatesList = ({ points }) => {
    const pointsList = map(points, (point, idx) => (
        <ListGroup.Item key={idx}>
            {point[0]}, {point[1]}
        </ListGroup.Item>
    ));
    return <ListGroup>{pointsList}</ListGroup>;
};

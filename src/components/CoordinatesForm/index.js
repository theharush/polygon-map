import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";

export const CoordinatesForm = ({ setPoints, setCenter }) => {
    const handleSubmit = ({ latitude, longitude }) => {
        console.log("asdasd", { latitude, longitude });
        const newLocation = [latitude, longitude];
        setPoints((points) => [...points, newLocation]);
        setCenter(newLocation);
    };

    return (
        <Formik initialValues={{ latitude: 0, longitude: 0 }} onSubmit={handleSubmit}>
            {({ values, handleSubmit, handleChange }) => (
                <form>
                    <Form.Group className="mb-3">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="number"
                            name="latitude"
                            placeholder="latitude"
                            onChange={handleChange}
                            value={values.latitude}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="number"
                            name="longitude"
                            placeholder="longitude"
                            onChange={handleChange}
                            value={values.longitude}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit Cords
                    </Button>
                </form>
            )}
        </Formik>
    );
};

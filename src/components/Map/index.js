import React from "react";
import ReactBingmaps from "./ReactBingmaps";
import "./map.css";

export const Map = ({ points, center }) => {
    const regularPolygons = [
        {
            points: points,
            option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 },
        },
    ];

    return (
        <ReactBingmaps
            id="one"
            className="customClass"
            center={center}
            bingmapKey="AjGOaJOq2-74BkGKZoa2eb6HshtefJ1TrRkLAitQ9aJbb0blKc1BPkQCRwTc4WOD"
            regularPolygons={regularPolygons}
        />
    );
};

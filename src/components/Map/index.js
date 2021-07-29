import React from "react";
import ReactBingmaps from "./ReactBingmaps";
import "./map.css";

export const Map = () => {
    const regularPolygons = [
        {
            points: [
                [32.568883, 34.949582],
                [32.615164, 36.169065],
                [30.865768, 35.03198],
            ],
            option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 },
        },
    ];

    return (
        <ReactBingmaps
            id="one"
            className="customClass"
            center={[13.0827, 80.2707]}
            bingmapKey="AjGOaJOq2-74BkGKZoa2eb6HshtefJ1TrRkLAitQ9aJbb0blKc1BPkQCRwTc4WOD"
            regularPolygons={regularPolygons}
        />
    );
};

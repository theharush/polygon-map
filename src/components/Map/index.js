import React from "react";
import ReactBingmaps from "react-bingmaps/lib/components/ReactBingmaps";
import "./map.css";

export const Map = () => {
    const regularPolygons = [
        {
            center: [13.0827, 80.2707],
            radius: 5,
            points: 36,
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

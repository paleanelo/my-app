import React from "react";
import "./style.css";

function Rating({ maxStars, selectedStars }) {
    const stars = Array.from({ length: maxStars }, (_, index) => index < selectedStars);

    return (
        <div className="rating">
            {stars.map((isFilled, index) => (
                <span key={index} className={`star ${isFilled ? "filled" : "empty"}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default Rating;

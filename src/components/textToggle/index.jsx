import React, { useState } from "react";
import "./style.css";

function TextToggle({ text }) {
    const [showFullText, setShowFullText] = useState(false);

    const firstSentence = text.split(".")[0] + ".";

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="text-toggle">
            <span>{showFullText ? text : firstSentence}</span>
            <button onClick={toggleText}>
                {showFullText ? "Скрыть" : "Показать подробнее"}
            </button>
        </div>
    );
}

export default TextToggle;

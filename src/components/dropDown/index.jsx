import React, { useState } from "react";
import "./style.css";

function DropdownMenu({ buttonText, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-menu">
            <button onClick={toggleMenu} className="dropdown-button">
                {buttonText}
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {items.map((item, index) => (
                        <li key={index} className="dropdown-item">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;

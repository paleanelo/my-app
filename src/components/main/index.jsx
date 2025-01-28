import { useState } from "react";
import './style.css';

function Main({ h1 }) {
  const [isGreen, setIsGreen] = useState(true);
  const [isBlue, setIsBlue] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);


  const handleGreenClick = () => {
    setIsBlue(false); 
  };

  const handleRedClick = () => {
    setIsBlue(true);
    setIsGreen(!isGreen);
  };

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <main>
      <h1>{h1}</h1>

      {/* Скрываемый текст */}
      <button onClick={toggleText} className="toggle-btn">
        {isTextVisible ? 'Скрыть' : 'Показать'}
      </button>
      {isTextVisible && (
        <p className="text">Это текст, который можно скрыть или показать.</p>
      )}

      {/* Квадраты */}
      <div className="squares-container">
        <div
          className={`square ${isBlue ? 'blue' : 'red'}`}
          onClick={handleRedClick}
        ></div>
        <div
          className={`square ${isGreen ? 'green' : 'blue'}`}
          onClick={handleGreenClick}
        ></div>
      </div>
    </main>
  );
}

export default Main;
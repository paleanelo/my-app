import { useState } from "react";
import './style.css';

function Main({ h1 }) {
  const [isGreen, setIsGreen] = useState(true);
  const [isBlue, setIsBlue] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);

  // Логика для квадратов
  const handleGreenClick = () => {
    setIsBlue(false); // Зеленый вызывает замену синего на красный
  };

  const handleRedClick = () => {
    setIsBlue(true); // Красный возвращает синий
    setIsGreen(!isGreen); // Меняет цвет зеленого на синий
  };

  // Логика для скрытого текста
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
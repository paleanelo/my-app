import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import TextToggle from './components/textToggle';
import DropdownMenu from "./components/dropDown";
import Rating from "./components/rating";
import { useState } from "react";

function App() {
  
    const [isShow, setIsShow] = useState(false);

    const changeShow = () => {
        setIsShow(!isShow);
    };

    const [isShowText, setIsShowText] = useState(false);

    const toggleText = () => {
        setIsShowText(!isShowText);
    };

    const [navLinks, setNavLinks] = useState([
        { title: 'Первая', href: 'https://vk.com' },
        { title: 'Вторая', href: 'https://ok.ru' },
        { title: 'Третья', href: 'https://portal.petrocollege.ru' },
    ]);

    return (
        <div className="App">
            <Header links={navLinks} />
            <button onClick={changeShow}>Показать Main</button>

            {isShow && (
                <Main h1="Приветик" isShowText={isShowText} toggleText={toggleText} />
            )}
            <TextToggle text="Первое предложение. Второе предложение. Третье предложение. Четвертое предложение." />

            <DropdownMenu
                buttonText="Меню"
                items={["Подпункт 1", "Подпункт 2", "Подпункт 3"]}
            />

          <Rating maxStars={10} selectedStars={5} />

            <Footer year="2025" />


        </div>
    );
}

export default App;

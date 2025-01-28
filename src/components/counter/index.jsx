import { useState } from "react";
import './/style.css';

function Counter () {

    let [count, setCount] = useState(0);

    const increase = () => {

        setCount(count + 1);

        console.log(count);
    }

    const decrease = () => {
        setCount(count - 1);
        //console.log(count);
    }
    return (
        <>
            <h1>Счетчик!</h1>
            <h2>Счет: {count}</h2>
            <button onClick={increase}>Увеличить</button>
            <button onClick={decrease}>Уменьшить</button>
        </>
    );
}

export default Counter;
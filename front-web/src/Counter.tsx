import { useState} from "react";

function Counter() {

    const [counter, setCounter] = useState(0)
    
    const handlerIncrease = () => {
        setCounter(counter + 1);
    }
    
    const handlerDecrease = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <button onClick={handlerIncrease}>Incrementar</button>
            <button onClick={handlerDecrease}>Decrementar</button>
            <h1>Valor do contador: {counter}</h1>
        </div>
    )
}

export default Counter;
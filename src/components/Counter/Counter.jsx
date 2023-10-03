// components & styles
import "./Counter.css"
import AddToCart from "./AddToCart";

const Counter = ({ onAdd, count, setCount, handleAdd }) => {
    // const [count, setCount] = useState(0)
    const stock = 50;

    const onAddittion = () => {
        if (count === stock) {
            setCount(stock);
        } else {
            setCount(count + 1)
        }
    }
    const onSubtract = () => {
        if (count >= 1) {
            setCount(count - 1)
        } else {
            setCount(0)
        }
    }

    return <>
        <div className="counter-div">
            <button className="counter-btn1" onClick={onSubtract}>-</button>
            <p className="counter-p">{count}</p>
            <button className="counter-btn2" onClick={onAddittion}>+</button>
        </div>

        <AddToCart count={count} onAdd={onAdd} handleAdd={handleAdd} />
    </>

}

export default Counter;
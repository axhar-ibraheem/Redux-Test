import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggle } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementByFiveHandler = () => {
    dispatch(increment(5));
  };
  const decrementByFiveHandler = () => {
    dispatch(decrement(5));
  };
  const toggleCounterHandler = () => {
    dispatch(toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementByFiveHandler}>Increment By Five</button>
        <button onClick={decrementByFiveHandler}>Decrement By Five</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

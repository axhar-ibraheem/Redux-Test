import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementByFiveHandler = () => {
    dispatch({ type: "incrementbyfive" });
  };
  const decrementByFiveHandler = () => {
    dispatch({ type: "decrementbyfive" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementByFiveHandler}>IncrementByFive</button>
        <button onClick={decrementByFiveHandler}>DecrementByFive</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

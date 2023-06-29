import useCounter from "../hooks/use-counter";
const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(1);
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterOne;

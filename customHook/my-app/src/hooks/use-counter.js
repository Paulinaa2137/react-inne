import {useState}from "react";
const useCounter = (value) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
};
export default useCounter;

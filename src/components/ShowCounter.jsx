import { useCounterContext } from "../context/CounterContext";

function ShowCounter() {
  const { counter } = useCounterContext();
  return (
    <div className="show-counter">
      <p className="counter">{counter}</p>
    </div>
  );
}

export default ShowCounter;

import { useCounterContext } from "../context/CounterContext";

function ControlCounter() {
  const { dispatch } = useCounterContext();

  return (
    <div className="controls">
      <div>
        <button
        className="btn-substract"
          onClick={() => {
            dispatch({
              type: "SUBSTRACT",
              payload: 1,
            });
          }}
        >
          Substract
        </button>
      </div>
      <div>
        <button
        className="btn-add"
          onClick={() => {
            dispatch({
              type: "ADD",
              payload: 1,
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ControlCounter;

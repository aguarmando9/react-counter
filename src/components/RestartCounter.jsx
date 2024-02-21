import { useCounterContext } from "../context/CounterContext";
import Reiniciar from "../images/reiniciar.png";
function RestartCounter() {
  const { dispatch } = useCounterContext();

  const handleClick = () => {
    dispatch({
      type: "RESTART",
    });
  };

  return (
    <div className="restart-counter">
      <button id="btn-restart-counter" onClick={handleClick}>
        <img src={Reiniciar} alt="restart" />
      </button>
    </div>
  );
}

export default RestartCounter;

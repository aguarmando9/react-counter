import { CounterContext } from "./context/CounterContext";
import ShowCounter from "./components/ShowCounter";
import ControlCounter from "./components/ControlCounter";
import "./styles/App.css";

function App() {
  return (
    <CounterContext>
      <div className="container">
        <div className="title-container">
          <h1 className="title">Counter</h1>
        </div>
        <ShowCounter />
        <ControlCounter />
      </div>
    </CounterContext>
  );
}

export default App;

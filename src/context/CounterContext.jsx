import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Context = createContext();

export const useCounterContext = () => {
  return useContext(Context);
};

export function CounterContext({ children }) {
  const initialValue = () => {
    const counter = +localStorage.getItem("counter");
    return counter || 0;
  };

  const [counter, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return (state += action.payload);
      case "SUBSTRACT":
        return (state -= action.payload);
      default:
        return state;
    }
  }, initialValue());

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div>
      <Context.Provider
        value={{
          dispatch,
          counter,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
}

export default CounterContext;

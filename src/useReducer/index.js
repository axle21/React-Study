import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENTS: "increment",
  DECREMENTS: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENTS:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENTS:
      return { count: state.count + 1 };

    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENTS });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENTS });
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default ReducerComponent;

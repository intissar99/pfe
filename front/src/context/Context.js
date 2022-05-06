import { useEffect, useReducer, createContext, React } from "react";
import Reducers from "./Reducers";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
const Context = createContext(initialState);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducers, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

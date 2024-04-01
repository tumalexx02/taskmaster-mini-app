import { createContext, useReducer } from "react";
import tasksReducer from "./TasksReducer";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const initialState = {
    tasks: localStorage.getItem("tasks") ?? [],
    loading: true,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;

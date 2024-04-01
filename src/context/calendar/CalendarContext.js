import { createContext, useReducer } from "react";
import calendarReducer from "./CalendarReducer";
import { getAllDaysInOrder } from "./CalendarActions";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const initialState = {
    allDaysInMonth: getAllDaysInOrder(new Date()),
    currentDate: new Date(),
    activeDate: new Date(),
    activeItem: "DATE",
    isShow: false,
  };

  const [state, dispatch] = useReducer(calendarReducer, initialState);

  return (
    <CalendarContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;

const calendarReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CALENDAR":
      return {
        ...state,
        isShow: action.payload,
      };
    case "UPDATE_CUR_DATE":
      return {
        ...state,
        currentDate: new Date(),
      };
    case "SET_DAYS_IN_ORDER":
      return {
        ...state,
        allDaysInMonth: action.payload,
      };
    case "SET_DATE":
      return {
        ...state,
        activeDate: new Date(state.activeDate.setDate(action.payload)),
      };
    case "SET_MONTH":
      return {
        ...state,
        activeDate: new Date(state.activeDate.setMonth(action.payload)),
      };
    case "SET_YEAR":
      return {
        ...state,
        activeDate: new Date(state.activeDate.setFullYear(action.payload)),
      };
    case "SET_ACTIVE_ITEM":
      return {
        ...state,
        activeItem: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

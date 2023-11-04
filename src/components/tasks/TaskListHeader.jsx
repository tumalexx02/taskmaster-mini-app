import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useContext } from "react"
import CalendarContext from "../../context/calendar/CalendarContext"
import { getTasksString, nextItem, prevItem, changeItemType } from "../../context/calendar/CalendarActions"

function TaskListHeader() {
  const {activeItem, activeDate, currentDate, isShow, dispatch} = useContext(CalendarContext)

  const showCalendar = () => {
    if (isShow) {
      dispatch({type: 'SHOW_CALENDAR', payload: false})
    } else {
      dispatch({type: 'SHOW_CALENDAR', payload: true})
    }
  }

  return (
    <div className="pb-4 pt-6 flex justify-between items-center w-full text-[--tg-theme-text-color] font-semibold">
      <button 
        className={`transition-all duration-300 ${isShow ? 'opacity-0' : 'opacity-100'}`}
        disabled={isShow && 'disabled'}
        onClick={() => prevItem(dispatch, activeDate, activeItem)}
        >
        <FaAngleLeft className="calendar__header-icon" />
      </button>

      <h1 className="text-md text-center w-full">
        Tasks
        <button 
          className={`inline-flex items-center transition pl-1 text-[--tg-theme-link-color] font-bold active:scale-95 disabled:active:scale-100 ${isShow && 'underline'}`}
          onClick={() => changeItemType(dispatch, activeItem)}
          disabled={isShow && 'disabled'}>
          {getTasksString(activeItem, activeDate, currentDate)}
        </button>
      </h1>

      <button 
        className={`transition-all duration-300 ${isShow ? 'opacity-0' : 'opacity-100'}`}
        disabled={isShow && 'disabled'}
        onClick={() => nextItem(dispatch, activeDate, activeItem)}
        >
        <FaAngleRight className="calendar__header-icon" />
      </button>
    </div>
  )
}

export default TaskListHeader

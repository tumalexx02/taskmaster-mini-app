import { useContext } from "react"
import { FaCalendar } from "react-icons/fa"
import CalendarContext from "../../context/calendar/CalendarContext"

function CalendarSwitcher() {
  const {dispatch, isShow} = useContext(CalendarContext)

  const showCalendar = () => {
    if (isShow) {
      dispatch({type: 'SHOW_CALENDAR', payload: false})
    } else {
      dispatch({type: 'SHOW_CALENDAR', payload: true})
    }
  }

  return (
    <div className={`switcher ${isShow && 'switcher_hide'}`}>
      <button 
    className={`switcher__button ${isShow && 'switcher__button_hide'}`}
    onClick={showCalendar}>
      <FaCalendar className={`switcher__icon ${isShow && 'switcher__icon_hide'}`}/>
      {isShow ? 'Скрыть' : 'Показать'} календарь
    </button>
    </div>
  )
}

export default CalendarSwitcher

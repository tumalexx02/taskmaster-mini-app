import { useContext } from "react"
import CalendarContext from "../../context/calendar/CalendarContext"
import { isToday } from "../../context/calendar/CalendarActions"

function TodayButton() {
  const {activeDate, activeItem, currentDate, dispatch} = useContext(CalendarContext)

  return (
    <button 
      disabled={isToday(activeDate, currentDate) && activeItem === 'DATE' && 'disabled'} 
      className='calendar__today-button'
      onClick={() => {
        dispatch({type: 'SET_DATE', payload: currentDate.getDate()})
        dispatch({type: 'SET_MONTH', payload: currentDate.getMonth()})
        dispatch({type: 'SET_YEAR', payload: currentDate.getFullYear()})
        dispatch({type: 'SET_ACTIVE_ITEM', payload: 'DATE'})
      }}>
        Сегодня
    </button>
  )
}

export default TodayButton

import { useContext } from "react"
import CalendarContext from "../../context/calendar/CalendarContext"
import { dateStyleType } from "../../context/calendar/CalendarActions"

function Date({date}) {
  const {dispatch, activeDate, currentDate, activeItem} = useContext(CalendarContext)
  
  return (
    <button disabled={date === '' && 'disabled'}

    className={dateStyleType(date, currentDate, activeDate, activeItem)}

    onClick={() => {
      dispatch({type: 'SET_DATE', payload: date})
      activeItem !== 'DATE' && dispatch({type: 'SET_ACTIVE_ITEM', payload: 'DATE'})
    }}>
      {date}
    </button>
  )
}

export default Date

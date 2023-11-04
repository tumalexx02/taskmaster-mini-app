import { getAllDaysInOrder, isLongMonth } from '../../context/calendar/CalendarActions'
import { useContext, useEffect } from 'react'
import CalendarContext from '../../context/calendar/CalendarContext'
import CalendarHeader from './CalendarHeader'
import DatesGrid from './DatesGrid'
import TodayButton from './TodayButton'

function Calendar() {
  const {activeDate, dispatch, isShow, allDaysInMonth} = useContext(CalendarContext)

  // Updating the currentDate state every second
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: 'UPDATE_CUR_DATE'})
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Updating the allDaysInMonth state when the activeDate state changes
  useEffect(() => {
    dispatch({type: 'SET_DAYS_IN_ORDER', payload: getAllDaysInOrder(activeDate)})
  }, [activeDate])

  // Scrolling to top when the isShow state changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [isShow])

  return (
    <div className={`calendar ${isShow && (isLongMonth(allDaysInMonth) ? 'calendar_active-long' : 'calendar_active-short')}`}>
      <CalendarHeader />

      <DatesGrid />

      <TodayButton />
    </div>
  )
}

export default Calendar
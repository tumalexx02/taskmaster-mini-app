import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useContext } from 'react'
import { prevMonth, nextMonth, getMonthString, changeItemType } from '../../context/calendar/CalendarActions'
import CalendarContext from '../../context/calendar/CalendarContext'

function CalendarHeader() {
  const {dispatch, activeItem, currentDate, activeDate, isShow} = useContext(CalendarContext)

  return (
    <div className="calendar__header">
        <button onClick={() => prevMonth(dispatch, activeDate)}>
          <FaAngleLeft className={`calendar__header-icon ${!isShow && 'calendar__header-icon_hide'}`} />
        </button>
        
        <button className={`calendar__header-button
        ${activeItem === 'MONTH' && 'calendar__header-button_active'}`} 
        onClick={() => changeItemType(dispatch, activeItem)}>
          {`${getMonthString(activeDate.getMonth())} ${currentDate.getFullYear() !== activeDate.getFullYear() ? activeDate.getFullYear() : ''}`}
        </button>

        <button onClick={() => nextMonth(dispatch, activeDate)}>
          <FaAngleRight className={`calendar__header-icon ${!isShow && 'calendar__header-icon_hide'}`} />
        </button>
      </div>
  )
}

export default CalendarHeader

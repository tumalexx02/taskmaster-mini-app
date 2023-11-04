import { useContext, useState } from 'react'
import { daysOfTheWeek, prevMonth, nextMonth, isLongMonth } from '../../context/calendar/CalendarActions'
import CalendarContext from '../../context/calendar/CalendarContext'
import Date from './Date'

function DatesGrid() {
  const {allDaysInMonth} = useContext(CalendarContext)

  return (
    <div className={`calendar__dates-grid ${isLongMonth(allDaysInMonth) ? `calendar__dates-grid_long` : 'calendar__dates-grid_short'} gap-4 justify-center items-start`}>
        {daysOfTheWeek.map((day) => (
          <div key={day} className='calendar__day-of-the-week'>{day}</div>
        ))}

        {allDaysInMonth.map((date, i) => (
          <Date key={i} date={date} />
        ))}        
      </div>
  )
}

export default DatesGrid

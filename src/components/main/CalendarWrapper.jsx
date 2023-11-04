import CalendarSwitcher from "./CalendarSwitcher"
import Calendar from "../calendar/Calendar"
import ActionBar from "./ActionBar"

function CalendarWrapper() {
  return (
    <div className="calendar__wrapper">
      <CalendarSwitcher />
      <Calendar />
      <ActionBar />
    </div>
  )
}

export default CalendarWrapper

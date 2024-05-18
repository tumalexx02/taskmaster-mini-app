import { FaPlus } from "react-icons/fa"
import { useContext } from "react"
import CalendarContext from "../../context/calendar/CalendarContext"
import { sendDateToTelegram } from "../../context/calendar/CalendarActions"

function ActionBar() {
  const { activeItem, activeDate } = useContext(CalendarContext)

  return (
    <div className="action-bar">
      <button className="action-bar__button" disabled={activeItem === 'MONTH' && 'disabled' } onClick={() => sendDateToTelegram(activeDate)}>
        <FaPlus className="action-bar__icon" />
        Добавить
      </button>
    </div>
  )
}

export default ActionBar

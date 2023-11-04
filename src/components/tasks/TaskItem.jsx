import { useContext } from "react"
import CalendarContext from "../../context/calendar/CalendarContext"
import PropTypes from 'prop-types'

function TaskItem({task}) {
  const {isShow} = useContext(CalendarContext)

  return (
    <div className={`transitions-all duration-500 h-[4rem] my-[1rem] opacity-100 flex items-center w-full ${isShow && 'opacity-75'}`}>
      <div className="h-[4rem] min-w-[4rem] flex justify-center items-center  rounded-lg text-[--tg-theme-button-text-color] bg-[--tg-theme-button-color] font-bold">
        {String(task.date.getHours()).padStart(2, '0')}:{String(task.date.getMinutes()).padStart(2, '0')}
      </div>

      {/* <div className="h-[3.5rem] w-1 bg-[--tg-theme-link-color] rounded-md ml-[0.5rem]"></div> */}

      <div className="ml-[1rem] flex flex-col">
        <div className="text-[--tg-theme-text-color] text-sm font-semibold line-clamp-1">
          {task.title}
        </div>
        <div className="text-[--tg-theme-hint-color] text-sm overflow-hidden text-ellipsis line-clamp-2">
          {task.descr}
        </div>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default TaskItem

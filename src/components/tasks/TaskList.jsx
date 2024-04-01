import { BiTaskX } from 'react-icons/bi'
import { useContext } from "react"
import { dateComparison } from "../../context/calendar/CalendarActions"
import CalendarContext from "../../context/calendar/CalendarContext"
import TasksContext from "../../context/tasks/TasksContext"
import TaskListHeader from "./TaskListHeader"
import TaskItem from "./TaskItem"

function TaskList() {
  const {tasks, loading} = useContext(TasksContext)
  const {activeDate, activeItem} = useContext(CalendarContext)

  return (
    <div className="px-8 pb-8 flex flex-col text-lg items-center mt-3 bg-[--tg-theme-bg-color] select-none">
      <TaskListHeader />
    
      {(tasks.length !== 0) ? 
        tasks
          .filter((task) => dateComparison(task.date, activeDate, activeItem))
          .map((task, i) => <TaskItem key={i} task={task} />)
        : (<p className="text-[--tg-theme-hint-color] py-6 flex flex-col items-center text-center">
            <BiTaskX className='text-3xl h-10 mb-1' />{`У вас нет задач в ${activeItem === 'MONTH' ? 'этом месяце' : 'этот день'}.`}
          </p>)}
    </div>
  )
}

export default TaskList

import Calendar from "../components/calendar/Calendar"
import ActionBar from "../components/main/ActionBar"
import TaskList from "../components/tasks/TaskList"
import CalendarSwitcher from "../components/main/CalendarSwitcher"
import CalendarWrapper from "../components/main/CalendarWrapper"

function Main() {
  return (
    <>
      <CalendarWrapper />
      <TaskList />
    </>
  )
}

export default Main

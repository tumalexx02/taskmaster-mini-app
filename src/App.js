import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalendarProvider } from "./context/calendar/CalendarContext";
import { TasksProvider } from "./context/tasks/TasksContext";
import Main from "./pages/Main"

function App() {
  return (
    <TasksProvider>
      <CalendarProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <main className="container mx-auto">
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CalendarProvider>
    </TasksProvider>
  );
}

export default App;
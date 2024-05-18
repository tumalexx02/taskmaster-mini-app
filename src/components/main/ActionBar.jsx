import { FaPlus } from "react-icons/fa"

function ActionBar({ onAddTask }) {
  return (
    <div className="action-bar">
      <button className="action-bar__button">
        <FaPlus className="action-bar__icon" onClick={onAddTask} />
        Добавить
      </button>
    </div>
  )
}

export default ActionBar

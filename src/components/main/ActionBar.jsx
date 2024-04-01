import { FaSearch, FaPlus, FaArchive } from "react-icons/fa"

function ActionBar() {
  return (
    <div className="action-bar">
      <button className="action-bar__button">
        <FaSearch className="action-bar__icon" />
        Поиск
      </button>
      <button className="action-bar__button">
        <FaPlus className="action-bar__icon" />
        Добавить
      </button>
      <button className="action-bar__button">
        <FaArchive className="action-bar__icon" />
        Архив
      </button>
    </div>
  )
}

export default ActionBar

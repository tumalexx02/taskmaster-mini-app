export const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const daysOfTheWeek = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

export const getAllDaysInOrder = (activeDate) => {
  const allDays = [];
  const date = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  const firstMonthDay = date.getDay();
  const spacesCount = (firstMonthDay + 6) % 7;

  if (firstMonthDay !== 1) {
    for (let i = 0; i < spacesCount; i++) {
      allDays.push('')
    }
  }

  for (let i = 0; i < daysInMonth[activeDate.getMonth()]; i++) {
    allDays.push(i + 1)
  }

  if (activeDate.getMonth() === 1 && activeDate.getFullYear() % 4 === 0) {
    allDays.push(29)
  }

  return allDays
}

export const getMonthString = (month) => {
  switch(month) {
    case 0:
      return 'January'
    case 1:
      return 'February'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 11:
      return 'December'
    default:
      return ''
  }
}

export const getTasksString = (activeItem, activeDate, currentDate) => {
  switch (activeItem) {
    case 'DATE':
      if (activeDate.getDate() === currentDate.getDate() && activeDate.getMonth() === currentDate.getMonth() && activeDate.getFullYear() === currentDate.getFullYear()) {
        return 'Today'
      } else {
        return `${getMonthString(activeDate.getMonth())}, ${activeDate.getDate()}`
      }
    case 'MONTH':
      return `All ${getMonthString(activeDate.getMonth())} ${currentDate.getFullYear() !== activeDate.getFullYear() ? activeDate.getFullYear() : ''}`
    default:
      break
  }
}

export const isLeapYear = (year) => year % 4 === 0

export const prevMonth = (dispatch, activeDate) => {
  dispatch({type: 'SET_DATE', payload: 1})

  if (activeDate.getMonth() !== 0) {
    dispatch({type: 'SET_MONTH', payload: activeDate.getMonth() - 1})
  } else {
    dispatch({type: 'SET_YEAR', payload: activeDate.getFullYear() - 1})
    dispatch({type: 'SET_MONTH', payload: 11})
  }
}

export const nextMonth = (dispatch, activeDate) => {
  dispatch({type: 'SET_DATE', payload: 1})

  if (activeDate.getMonth() !== 11) {
    dispatch({type: 'SET_MONTH', payload: activeDate.getMonth() + 1})
  } else {
    dispatch({type: 'SET_YEAR', payload: activeDate.getFullYear() + 1})
    dispatch({type: 'SET_MONTH', payload: 0})
  }
}

export const prevItem = (dispatch, activeDate, activeItem) => {
  if (activeItem === 'DATE') {
    dispatch({type: 'SET_DATE', payload: activeDate.getDate() - 1})
  } else {
    if (activeDate.getMonth() !== 0) {
      dispatch({type: 'SET_MONTH', payload: activeDate.getMonth() - 1})
    } else {
      dispatch({type: 'SET_YEAR', payload: activeDate.getFullYear() - 1})
      dispatch({type: 'SET_MONTH', payload: 11})
    }
  }
}

export const nextItem = (dispatch, activeDate, activeItem) => {
  if (activeItem === 'DATE') {
    dispatch({type: 'SET_DATE', payload: activeDate.getDate() + 1})
  } else {
    if (activeDate.getMonth() !== 11) {
      dispatch({type: 'SET_MONTH', payload: activeDate.getMonth() + 1})
    } else {
      dispatch({type: 'SET_YEAR', payload: activeDate.getFullYear() + 1})
      dispatch({type: 'SET_MONTH', payload: 0})
    }
  }
}

export const isToday = (activeDate, currentDate) => {
  return activeDate.getDate() === currentDate.getDate() && 
  activeDate.getMonth() === currentDate.getMonth() && 
  activeDate.getFullYear() === currentDate.getFullYear()
}

export const dateStyleType = (date, currentDate, activeDate, activeItem) => {
  if (date === '') {
    return ''
  }

  if (activeItem === 'MONTH') {
    if (currentDate.getDate() === date && currentDate.getMonth() === activeDate.getMonth() && currentDate.getFullYear() === activeDate.getFullYear()) {
      return 'calendar__date calendar__date_today'
    } else {
      return 'calendar__date calendar__date_month-view'
    }
  } else if (activeItem === 'DATE') {
    if (currentDate.getFullYear() === activeDate.getFullYear() && currentDate.getMonth() === activeDate.getMonth() && date === currentDate.getDate()) {
      if (activeDate.getDate() === currentDate.getDate()) {
        return 'calendar__date calendar__date_today-active'
      } else {
        return 'calendar__date calendar__date_today'
      }
    } else {
      if (activeDate.getDate() === date) {
        return 'calendar__date calendar__date_active'
      } else {
        return 'calendar__date'
      }
    }
  }
}

export const isLongMonth = (allDaysInMonth) => {
  return Math.ceil(allDaysInMonth.length / 7) !== 5
}

export const dateComparison = (firstDate, secondDate, activeItem) => {
  if (activeItem === 'DATE') {
    return firstDate.getDate() === secondDate.getDate() && 
    firstDate.getMonth() === secondDate.getMonth() && 
    firstDate.getFullYear() === secondDate.getFullYear()
  } else {
    return firstDate.getMonth() === secondDate.getMonth() && 
    firstDate.getFullYear() === secondDate.getFullYear()
  }
}

export const changeItemType = (dispatch, activeItem) => {
  if (activeItem === 'MONTH') {
    dispatch({type: 'SET_ACTIVE_ITEM', payload: 'DATE'})
  } else {
    dispatch({type: 'SET_ACTIVE_ITEM', payload: 'MONTH'})
  }
}
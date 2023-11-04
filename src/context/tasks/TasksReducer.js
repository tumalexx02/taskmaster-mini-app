const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        tasks: localStorage.getItem('tasks'),
        loading: true
      }
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    default: 
      return state
  }
}
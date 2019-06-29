const initialState = {
    history: [],
    incomplete:[],
    completed: []
  };
  
  const todoInput = (state=initialState, action) => {
    const newState = {...state};
  
    switch (action.type) {
        case "TODO_INPUT":
          return {
            ...state,
            incomplete: state.incomplete.concat({ id: Math.random(), todo: action.input }),
            history: state.history.concat({ id: Math.random(), todo: action.input })
          };
          break;
        case "DELETE_TODO":
          return {
            ...state,
            completed: state.completed.concat({ id: action.id, todo: action.todo }),
            incomplete: newState.incomplete.filter((item)=> item.id !== action.id )
          }
          break;
        case "INCOMPLETE_TODO":
          return {
            ...state,
            incomplete: state.incomplete.concat({ id: action.id, todo: action.todo }),
            completed: newState.completed.filter((item)=> item.id !== action.id )
          }
          break;
        default:
          
    } 
    
    return newState;
  };
  
  export default todoInput;
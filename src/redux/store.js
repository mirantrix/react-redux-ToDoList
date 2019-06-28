const initialState = {
    todoHistory:[]
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case "TODO_INPUT":
          return {
            ...state,
            todoHistory: state.todoHistory.concat({ id: Math.random(), todo: action.input })
          };
          break;
        } 
    
    return newState;
};

export default reducer;
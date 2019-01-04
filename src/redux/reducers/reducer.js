// reducer receives action objects that have been dispatched in response
// to some event (i.e. componentDidMount, onSubmit, onClick etc)
import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_TODO
} from "../actions/types";

const mockData = {
  todos: [
    { id: 1, text: "learn redux", complete: false },
    { id: 2, text: "build a cool project", complete: false },
    { id: 3, text: "Make more bruno emojis", complete: true }
  ]
};

const todosReducer = (state = mockData, action) => {
  //switch over the action object's 'type' property to decide HOW
  // the state is updated
  switch (action.type) {
    // when action.type === "LOAD_DATA," we return the data to our store
    // (in this case, an object with an array of 'todos')
    case SHOW_ALL:
      return action.data;
    // when action.type === 'ADD_TODO', we return a copy of our previous state...
    // WITH the new todo appended to the end using es6 spread syntax
    case ADD_TODO:
      // return a copy of current state with new todo added
      let lastTodoId = state.todos[state.todos.length - 1].id;
      return {
        todos: [
          ...state.todos,
          {
            id: parseInt(lastTodoId + 1),
            text: action.todo,
            complete: false
          }
        ]
      };
    case TOGGLE_COMPLETE:
      // console.log("action todo", action.todo);
      // console.log("state todos", state.todos);
      return {
        todos: state.todos.map(todo => {
          if (todo.text === action.todo.text) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        })
      };
    case SHOW_COMPLETE:
      return {
        todos: state.todos.filter(todo => todo.complete)
      };

    case SHOW_TODO:
      debugger;
      return {
        todos: state.todos.filter(todo => !todo.complete)
      };

    // when action.type does not match any of the cases above, simply return the state as-is
    default:
      return state;
  }
};

export default todosReducer;

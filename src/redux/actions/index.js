// mock data - this will be the 'jumping off point' for the todo app.
// IRL, this data is more likely to come from somewhere else, like a database or an API.
// in that case, things get trickier - see the lesson on Async Redux and Thunk for examples
import {
  TOGGLE_COMPLETE,
  ADD_TODO,
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_TODO
} from "./types";

const mockData = {
  todos: [
    { id: 1, text: "learn redux", complete: true },
    { id: 2, text: "build a cool project", complete: false },
    { id: 3, text: "Make more bruno emojis", complete: false },
    { id: 4, text: "Learn Jest and Enzyme", complete: false },
    { id: 5, text: "Add tests to your project", complete: false }
  ]
};
// Action creator that returns an action object with  type of "LOAD_DATA" and
// the aforementioned 'mockData' object as its payload. Dispatched when 'App.js' mounts
export function showAll() {
  return { type: SHOW_ALL, data: mockData };
}

// Action creator that returns an action object with type of 'ADD_TODO' and
// the user's input (from AddTodo.js) as its payload. Dispatched when the form on 'AddTodo.js'
// is submitted
export function addTodo(todo) {
  return { type: ADD_TODO, todo: todo };
}

export function toggleComplete(todo) {
  return { type: TOGGLE_COMPLETE, todo: todo };
}

export function showComplete() {
  return { type: SHOW_COMPLETE };
}
export function showTodo() {
  return { type: SHOW_TODO };
}

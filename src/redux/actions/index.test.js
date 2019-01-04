import {
  addTodo,
  toggleComplete,
  loadData,
  showAll,
  showComplete,
  showTodo
} from "./index.js";
import {
  TOGGLE_COMPLETE,
  ADD_TODO,
  LOAD_DATA,
  SHOW_ALL,
  SHOW_COMPLETE,
  SHOW_TODO
} from "./types";

describe("actions", () => {
  test("Show All Action Creator", () => {
    const mockData = {
      todos: [
        { id: 1, text: "learn redux", complete: true },
        { id: 2, text: "build a cool project", complete: false },
        { id: 3, text: "Make more bruno emojis", complete: false },
        { id: 4, text: "Learn Jest and Enzyme", complete: false },
        { id: 5, text: "Add tests to your project", complete: false }
      ]
    };
    const expectedAction = {
      type: SHOW_ALL,
      data: mockData
    };
    expect(showAll()).toEqual(expectedAction);
  });

  test("Add Todo Action Creator", () => {
    const sampleTodo = { text: "test-TODO", complete: false };
    const action = { type: ADD_TODO, todo: sampleTodo };
    expect(addTodo(sampleTodo)).toEqual(action);
  });

  // when this action is dispatched, I want the todo that was clicked
  // on to switch from true to false
  test("Toggle Complete Action Creator", () => {
    const todo = {
      text: "test",
      complete: false
    };
    const action = {
      type: TOGGLE_COMPLETE,
      todo: todo
    };

    expect(toggleComplete(todo)).toEqual(action);
  });

  test("SHOW Complete action creator", () => {
    const expectedAction = {
      type: SHOW_COMPLETE
    };
    expect(showComplete()).toEqual(expectedAction);
  });
  test("SHOW TODO action creator", () => {
    const expectedAction = {
      type: SHOW_TODO
    };
    expect(showTodo()).toEqual(expectedAction);
  });

  //TODO - remove todo from store
});

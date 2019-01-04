import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { showAll } from "./redux/actions";

class App extends Component {
  // dispatches the action that sends the 'mockData' object
  // through the reducer and to the store
  componentDidMount() {
    this.props.showAll();
  }

  // WHY redux? Just look how neat and tidy the App component is!
  render() {
    return (
      <div className="App">
        <br />
        <h1 className="ui header">
          <i className="gem icon" />
          To Do
        </h1>
        <Todos />
        <AddTodo />
      </div>
    );
  }
}

// maps the 'loadData' action creator to 'App.js' props. When executed, this
// kicks off the cycle from 'action' => 'reducer' => 'update state'.
// (i.e. it dispatches the action created BY the loadData function)
const mapDispatchToProps = dispatch => {
  return {
    showAll: () => dispatch(showAll())
  };
};

// connecting our dispatched loadData function to App's props.
export default connect(
  null,
  mapDispatchToProps
)(App);

export { App };

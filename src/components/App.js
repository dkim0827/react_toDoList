import React, { Component } from "react";

import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;

import React, { Component } from "react";

import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>Finished Template</TodoListTemplate>
    );
  }
}

export default App;

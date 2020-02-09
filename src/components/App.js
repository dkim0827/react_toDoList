import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

class App extends Component {
  id = 3; // since 0, 1, 2 already exists

  state = {
    input: "",
    todos: [
      { id: 0, text: "Hi", checked: false },
      { id: 1, text: "React", checked: true },
      { id: 2, text: "Nice to Meet You", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value // input's changed value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // will empty input
      // will add data in array with concat
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    // if Enter is pressed call handleCreate
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList todos={todos} />
      </TodoListTemplate>
    );
  }
}

export default App;

/*
in handleCreate:
added data in array with concat.
Usually for javascript when add data in array we usually use push.

const array = [];
array.push(1);
// [1]

but when you handle array in state, never use push!
reason is

let arrayOne = [];
let arrayTwo = arrayOne;
arrayOne.push(1);
console.log(arrayOne === arrayTwo); // true

let arrayOne = [];
let arrayTwo = arrayOne.concat(1);
console.log(arrayOne === arrayTwo); // false

if you add data with push it adds the data but you are pointing same array
so you cannot compare. When you optimize performance you need to compare arrays
to prevent re-render. If you use push you cannot compre arrays.
Since concat is making new array you can optimize the performance!
------------------------------------------

const { handleChange, handleCreate, handleKeyPress } = this;
used destructing assignments. So in this case we can skip
this.handleChange, this.handleCreate, this.handleKeyPress


*/

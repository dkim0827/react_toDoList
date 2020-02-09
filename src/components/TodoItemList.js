import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;

/*
TodoItemList(Component) will do
render multiple TodoItem Component.
Since made Template Component and did styling on it
no need to add styling for TodoItemList(Component).

In case of render a List, especially when list is dynamic(changes)
need to make the component with class type to optimize performance.
(https://reactjs.org/docs/optimizing-performance.html)

TodoItemList(Component) will receive 3 propss
1. todos: todo
2. onToggle: function to toggle checkbox
3. onRemove: function to delete item

    const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );

if use way above value inside todo will become props
*/

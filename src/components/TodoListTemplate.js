import React, { Component } from "react";
import "./stylesheets/TodoListTemplate.css";

const TodoTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">To Do List</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoTemplate;

/*
 If Component is not using any LifeCycle API, state but
 receive props and render view can use functional component.

 A functional component is just a plain JavaScript function
 which accepts props as an argument and returns a React element

at here used destructing assignment so
(props) => { ... }
({form, children}) => { ... }

-----------------------------------
example from MDN:(Destructing assignment)
-----------------------------------
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
-----------------------------------


*/

import React, { Component } from "react";
import "./stylesheets/TodoItem.css";

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;

/*
TodoItem will recieve 5 props
1. text: input of todo
2. checked: status of checkbox
3. id: each todo's unique id
4. onToggle: function to toggle checkbox
5. onRemove: function to delete item

in onClick event of this Component's parent DOM
added onToggle

✓ &#x2713;
× &times;
at x added onRemove

at onRemove
e.stopPropagation() stops event to call parent's event
therefore onToggle will not be triggered, only onRemove gets triggered

if don't add stopPropagation()
when press x button both onRemove && onToggle(connected to parent DOM's onClick event)
onRemove -> onToggle
code might not work as expected which will result as fail to delete properly

onToggle and onRemove
receive id as parameter and updates data at that id
since we need to put parameter
we wrote as:
onClick={() => onToggle(id)}

never write like:
onClick={onToggle{id}}
in this case it will be called when this function is rendered. If function is called
data will change, if data change will re-render which will result as infinite loop

-------------------------------------
at todo-text
according to value of checked added 'checked' at className
this is called Template literals

`todo-text ${checked && 'checked'}`
// same with below
"todo-text " + checked && 'checked'
// if want to prevent todo-text false when value of checked is false
`todo-text ${ checked ? ' checked' : '' }`

*/

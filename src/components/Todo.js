import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/action/action";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (

    <li className="text-warning" style={{ cursor: "pointer" }} onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}
        <span
            className={
                todo && todo.completed && "text-success"
            }
        >
            {todo.content}
        </span>
        <button className="bg-danger text-white" onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
);

// export default Todo;
export default connect(
    null,
    { toggleTodo, deleteTodo }
)(Todo);

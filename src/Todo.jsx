import { useState } from "react";
import { parseLine } from "./State";

export default function Todo(props) {
    let [todo, setTodo] = useState(props.value);
    let keyPressHandler = function (e) {
        switch (e.key) {
            case 'x':
                setTodo(parseLine(
                    todo.isDone ? todo.text.slice(2) : "x " + todo.text
                ));
                break;
        }
    };
    return (
        <p 
            className={todo.isDone ? 'todo-done' : 'todo'} 
            tabIndex={props.index}
            onKeyUp={keyPressHandler}>
                {todo.text}
        </p>
    )
}
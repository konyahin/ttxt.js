import { useState } from "react";
import { Todo } from "./Todo";

export default function TodoView(props) {
    let [todo, setTodo] = useState(props.value);
    let keyPressHandler = function (e) {
        switch (e.key) {
            case 'x':
                todo.toggleDoneState();
                // TODO do it right
                setTodo(new Todo(todo.text));
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
    );
}
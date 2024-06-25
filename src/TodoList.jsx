import { useState } from "react";
import Todo from "./Todo"

export default function TodoList({todos}) {
    let [filter, setFilter] = useState("")

    let children = todos
        .filter(todo => todo.text.includes(filter))
        .map((todo, id) => 
        <Todo key={todo.id} index={id +2} value={todo}/>)
        
    return (
        <>
            <input className='search' tabIndex={1} onChange={(e) => setFilter(e.target.value)}/>
            {children}
        </>
    )
}
import TodoList from './TodoList';
import { Todo } from './Todo';

let lines = [
  "make todo app +ttxt",
  "read book about react +maybe @home",
  "x use app template +ttxt",
  "scroll for tasks",
  "x search",
  "j and k for selection",
  "create task from search by Shift + Enter",
  "mark task as completed",
];

export default function App() {
  let todos = lines.map(line => new Todo(line))
  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

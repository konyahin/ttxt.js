import TodoList from './TodoList';
import { parseLine } from './State';

let lines = [
  "make todo app +ttxt",
  "read book about react +maybe @home",
  "x use app template +ttxt",
  "scroll for tasks",
  "search",
  "j and k for selection",
  "create task from search by Shif + Enter",
];

export default function App() {
  let todos = lines.map(parseLine)
  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

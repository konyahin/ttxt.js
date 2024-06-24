import Todo from './Todo';

let lines = [
  "make todo app +ttxt",
  "read book about react +maybe @home",
  "x make app template +ttxt",
];

function parseLine(line) {
  return {
    id: crypto.randomUUID(),
    text: line,
    isDone: line.startsWith("x ")
  };
}

export default function App() {
  let todos = lines.map(parseLine)
    .map((todo, id) => <Todo key={todo.id} index={id +2} value={todo}/>)
  return (
    <>
      <input id='search' tabIndex={1}/>
      {todos}
    </>
  )
}

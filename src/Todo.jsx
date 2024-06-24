
export default function Todo(props) {
    let className = props.value.isDone ? 'todo-done' : 'todo';
    return (
        <p className={className} tabIndex={props.index}>{props.value.text}</p>
    )
}
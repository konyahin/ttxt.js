export function parseLine(line) {
    return {
        id: crypto.randomUUID(),
        text: line,
        isDone: line.startsWith("x ")
    };
}

export function recreate(todo) {
    return {
        id: todo.id,
        text: todo.text,
        isDone: todo.text.startsWith("x ")
    }
}
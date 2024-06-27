export function Todo(line) {
    this.id = crypto.randomUUID();
    this.text = line;
    this.isDone = line.startsWith("x ");
}

Todo.prototype.toggleDoneState = function () {
    if (this.isDone) {
        this.text = this.text.slice(2);
    } else {
        this.text = "x " + this.text;
    }
    this.isDone = !this.isDone;
}
// Task object. Stored in project.todo_tasks and project.completed_tasks.

class Task {
    constructor(title, dueDate, completed) {
        this.title = title;
        this.dueDate = dueDate;
        this.completed = completed;
        }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

export default Task;
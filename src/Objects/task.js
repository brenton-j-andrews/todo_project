// Task object. Stored in project.todo_tasks and project.completed_tasks.

class Task {
    constructor(title) {
        this.title = title;
        this.completed = false;
        }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}

export default Task;
// Task object. Stored in project.todo_tasks and project.completed_tasks.

class Task {
    constructor(title, description) {
        this.title = title;
        this.description = this.description;
        this.completed = false;
        }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}

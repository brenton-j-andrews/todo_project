// Project Object.
import Task from "./task";

class Project {
    constructor(title, description, tasks, completed) {
        this.title = title;
        this.description = description;
        this.tasks = tasks;
        this.completed = completed;
    }

    addTask(title) {
        const new_task = new Task(title, false);
        this.tasks.push(new_task);
    }

    removeTask(remove_task) {
        const updated_tasks = this.tasks.filter(task => task.title !== remove_task.title);
        this.tasks = updated_tasks;
    }

    getIndex() {
        return this.index;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}

export default Project;
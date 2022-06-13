// Project Object.

class Project {
    constructor(title, description) {
        this.index = null;
        this.title = title;
        this.description = description;
        this.todo = [];
        this.completed_tasks = [];
        this.completed = false;
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
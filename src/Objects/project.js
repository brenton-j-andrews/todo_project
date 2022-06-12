// Project Object.

class Project {
    constructor(title) {
        this.index = null;
        this.title = title;
        this.description = "";
        this.todo = [];
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
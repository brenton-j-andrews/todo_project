// Local storage object.
import Project from "./project";
import Task from "./task";

class Storage {
    constructor() {
        this.localStorageData = localStorage.getItem("projects");
        this.prepared_input = this.convertLocalStorage();
    }

    // Initialize local storage if it doesn't exist yet. 
    initLocalStorage() {
        if (!localStorage.getItem("projects")) {
            console.log("creating partition...");
            localStorage.setItem("projects", "[]");
        }
        console.log("local storage: ", localStorage.getItem("projects"));
    }

    // Add project to localstorage.
    addProject(item) {
        const data_arr = JSON.parse(localStorage.getItem("projects")); 
        data_arr.push(item);
        localStorage.setItem("projects", JSON.stringify(data_arr));
    }

    // Add / updates tasks in localstorage.
    addTaskToStorage(project) {
        const data_arr = JSON.parse(localStorage.getItem("projects"));
        let project_index = data_arr.findIndex( item => item.title === project.title);
        data_arr[project_index] = project;
        localStorage.setItem("projects", JSON.stringify(data_arr));
    }

    removeTaskFromStorage(project, task) {
        let data_arr = JSON.parse(localStorage.getItem("projects"));
        let project_index = data_arr.findIndex( item => item.title === project.title);

        let new_tasks = project.tasks.filter(function(item) {
            return item.title !== task.title;
        })
        data_arr[project_index].tasks = new_tasks;
        localStorage.setItem("projects", JSON.stringify(data_arr));
    }

    // Delete project from localstorage.
    removeProject(item) {
        let data_arr = JSON.parse(localStorage.getItem("projects")).filter(project => {
            return project.title !== item.title;
        })
        localStorage.setItem("projects", JSON.stringify(data_arr));
    }

    // Convert localstorage string to usable input for projects state.
    convertLocalStorage() {
        this.initLocalStorage();
        const data_arr = [];

        JSON.parse(localStorage.getItem("projects")).forEach(createProject);

        function createProject(item) {
            let tasks = createTasks(item.tasks);
            data_arr.push(new Project(item.title, item.description, tasks, item.completed));
        }

        function createTasks(tasks) {
            return tasks.map((task) => new Task(task.title, task.dueDate, task.completed));
        }

        return data_arr;
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}

export default Storage;
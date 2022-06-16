// Local storage object.
import Project from "./project";

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
        const storage_arr = JSON.parse(localStorage.getItem("projects"));
        const data_arr = [];

        storage_arr.forEach(createProject);

        function createProject(item) {
            data_arr.push(new Project(item.title, item.description, item.tasks, item.completed))
        }

        return data_arr;
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}

export default Storage;
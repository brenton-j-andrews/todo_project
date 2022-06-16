// Local storage object.

class Storage {
    constructor() {
        this.localStorageData = localStorage.getItem("projects");
    }

    // Initialize local storage if it doesn't exist yet. 
    initLocalStorage() {
        if (!localStorage.getItem("projects")) {
            console.log("creating partition...");
            localStorage.setItem("projects", "[]");
        }

    }

    // Add project to localstorage.
    addProject(item) {
        const data_arr = JSON.parse(localStorage.getItem("projects")); 
        data_arr.push(item);
        localStorage.setItem("projects", JSON.stringify(data_arr));
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}

export default Storage;
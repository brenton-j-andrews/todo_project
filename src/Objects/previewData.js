// Fake project data for preview mode!

import Task from "./task";

export const previewData = [
    
    {
        title: "To-Do Project",
        description: "This project is a little exercise testing my skills with React, Firebase authentication and Firestore. In addition, I am learning about the use of React styled.components, local storage and other skills that I will put to use in future projects. Pretty cool! ",
        
        todo: [new Task("Complete task CRUD"), new Task("Add local storage"), new Task("Create task filter functions"), new Task("Add date / time feature"), new Task("Tie in to Firebase")],
        completed_tasks: [new Task("Projects sidebar menu"), new Task("Projects CRUD"), new Task("Basic styling")],
        completed: false
    },

    {
        title: "Things to do Today",
        description: "My chores for  the day.",
        todo: [new Task("Finish front-end for To-Do Project"), new Task("Go to the gym at 11"), new Task("Get a haircut after gym"), new Task("Make a pizza for dinner!")],
        completed_tasks: [new Task("Wake Up (="), new Task("Morning stretching routine"), new Task("Start working")],
        completed: false
    },

    {
        title: "Goals This Week",
        description: "Things I am hoping to get done this week!",
        
        todo: [new Task("Finish To-Do Project"), new Task("Start Reddit clone project"), new Task("Start job interview prep"), new Task("Start working on personal website"), new Task("Climb the V8 bouldering problem at the gym!")],
        completed_tasks: [new Task("The week just started, so nothing yet")],
        completed: false
    },
]


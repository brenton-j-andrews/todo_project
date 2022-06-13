// Fake project data for preview mode!

import Task from "./task";

export const previewData = [
    
    {
        title: "To-Do Project",
        description: "This project is a little exercise testing my skills with React, Firebase authentication and Firestore. In addition, I am learning about the use of React styled.components, local storage and other skills that I will put to use in future projects. Pretty cool! ",
        
        tasks: [new Task("Complete task CRUD", false), new Task("Add local storage", false), new Task("Create task filter functions", false), new Task("Add date / time feature", false), new Task("Tie in to Firebase", false), new Task("Projects sidebar menu", true), new Task("Projects CRUD", true), new Task("Basic styling", true)],
        completed: false
    },

    {
        title: "Things to do Today",
        description: "My chores for  the day.",
        tasks: [new Task("Finish front-end for To-Do Project", false), new Task("Go to the gym at 11", false), new Task("Get a haircut after gym", false), new Task("Make a pizza for dinner!", false), new Task("Wake Up (=", true), new Task("Morning stretching routine", true), new Task("Start working", true)],
        completed: false
    },

    {
        title: "Goals This Week",
        description: "Things I am hoping to get done this week!",
        
        tasks: [new Task("Finish To-Do Project", false), new Task("Start Reddit clone project", false), new Task("Start job interview prep", false), new Task("Start working on personal website", false), new Task("Climb the V8 bouldering problem at the gym!", false), new Task("The week just started, so nothing yet", true)],

        completed: false
    },
]


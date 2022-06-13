// Fake project data for preview mode!

import Task from "./task";

import Project from "./project";

export const previewData = [
    
    new Project(
    "To-Do Project", 
    "This project is a little exercise testing my skills with React, Firebase authentication and using Firestore to store user data. As a bonus, I am also learning about the use of React styled.components and local storage, which will come in handy for upcoming projects. Pretty cool!", 
    [new Task("Complete task CRUD", false), new Task("Add local storage", false), new Task("Create task filter functions", false), new Task("Add date / time feature", false), new Task("Tie in to Firebase", false), new Task("Projects sidebar menu", true), new Task("Projects CRUD", true), new Task("Basic styling", true)], 
    false ),

    new Project("Things to do Today",
    "My chores for the day.",
    [new Task("Finish front-end for To-Do Project", false), new Task("Go to the gym at 11", false), new Task("Get a haircut after gym", false), new Task("Make a pizza for dinner!", false), new Task("Wake Up (=", true), new Task("Morning stretching routine", true), new Task("Start working", true)],
    false ),

    new Project(
    "Goals This Week",
    "Things I am hoping to get done this week!",
    [new Task("Finish To-Do Project", false), new Task("Start Reddit clone project", false), new Task("Start job interview prep", false), new Task("Start working on personal website", false), new Task("Climb the V8 bouldering problem at the gym!", false), new Task("The week just started, so nothing yet", true)],
    false )
]


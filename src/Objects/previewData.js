// Fake project data for preview mode!

import Task from "./task";

import Project from "./project";

export const previewData = [
    
    new Project(
    "To-Do Project", 
    "This project is a little exercise testing my skills with React, Firebase authentication and using Firestore to store user data. As a bonus, I am also learning about the use of React styled.components and local storage, which will come in handy for upcoming projects. Pretty cool!", 
    [new Task("Complete task CRUD", "2022-06-14", false), new Task("Add local storage", "2022-06-14", false), new Task("Create task filter functions", "2022-06-14", false), new Task("Add date / time feature", "2022-06-14", false), new Task("Tie in to Firebase", "2022-06-14", false), new Task("Projects sidebar menu", "2022-06-14", true), new Task("Projects CRUD", "2022-06-14", true), new Task("Basic styling", "2022-06-14", true)], 
    false ),

    new Project("Things to do Today",
    "My chores for the day.",
    [new Task("Finish front-end for To-Do Project", "2022-06-14", false), new Task("Go to the gym at 11", "2022-06-14", false), new Task("Get a haircut after gym", "2022-06-14", false), new Task("Make a pizza for dinner!", "2022-06-14", false), new Task("Wake Up...", "2022-06-14", true), new Task("Morning stretching routine", "2022-06-14", true), new Task("Start working", "2022-06-14", true)],
    false ),

    new Project(
    "Goals This Week",
    "Things I am hoping to get done this week!",
    [new Task("Finish To-Do Project", "2022-06-14", false), new Task("Start Reddit clone project", "2022-06-17", false), new Task("Start job interview prep", "2022-06-15", false), new Task("Start working on personal website", "2022-06-18", false), new Task("Climb the V8 bouldering problem at the gym!", "2022-06-17", false), new Task("The week just started, so nothing yet", "2022-06-12", true)],
    false )
]


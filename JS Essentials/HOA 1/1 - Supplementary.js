// Created the array "teamDirectory" of team members with their details
let teamDirectory = [
    {
        name: "Leo Brooks",
        role: "Designer",
        skills: ["UI", "UX", "Figma"],
        available: true
    },
    {
        name: "Sasha Ivana",
        role: "Developer",
        skills: ["HTML", "CSS", "JS"],
        available: false
    },
    {
        name: "Jordan Lee",
        role: "Manager",
        skills: ["Planning", "Agile"],
        available: true
    }
];

// Now, we must add a new team member to the directory (using the .push() method)
teamDirectory.push({
    name: "Casey Moore",
    role: "QA Engineer",
    skills: ["Testing", "Debugging"],
    available: true
});

// Update availability of Sasha Ivana
teamDirectory[1].available = true;

// Log the name and first skill of the first team member
console.log(teamDirectory[0].name + " --> (First Skill): " + teamDirectory[0].skills[0]);

// Log the name and number of skills of the last team member
let lastIndex = teamDirectory.length - 1;
console.log(teamDirectory[lastIndex].name + " --> (Total Number of Skills): " + teamDirectory[lastIndex].skills.length);

// Log the total number of team members
console.log("Total number of team members: " + teamDirectory.length);

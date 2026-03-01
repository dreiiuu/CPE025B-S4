// I created the given contacts from the table and it is now in array form 
let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];

// Here is the main program in which the user can choose diferent actions 
while (true) {
    let action = prompt("Choose an action: show ~ all ~ add ~ search ~ quit");
    if (action === null) continue;

    action = action.toLowerCase();

    if (action === "quit") {
        alert("Goodbye :( ! See you around! \n- Dreiiuu's Technical Support Team."); 
        break;
    }

    switch (action) {
        case "show":
            let indexInput = prompt("Enter the user's contact index [0, 1, 2...]:"); 
            if (indexInput !== null) {
                let i = Number(indexInput);
                if (!isNaN(i) && i >= 0 && i < contacts.length) {
                    let c = contacts[i];
                    alert(`Name: ${c.name} \nRole: ${c.role} \nUser's First skill: ${c.skills[0]}`);
                } else {
                    alert("Invalid index.");
                }
            }
            break;

        case "all":
            let allNames = "";
            for (let c of contacts) {
                allNames += `${c.name}\n`;
            }
            alert("All contacts:\n" + allNames);
            break;

        case "add":
            let name = prompt("Enter Name:");
            let role = prompt("Enter Role:");
            let skill = prompt("Enter a Skill:");
            if (!name || !role || !skill) {
                alert("All fields are required.\nYou missed something, hehe, so no contact was added!");
            } else {
                contacts.push({
                    name: name,
                    role: role,
                    skills: [skill],
                    availability: true
                });
                alert(`Added contact:\n${name} / ${role} / Skill: ${skill}`);
            }
            break;

        case "search":
            let searchName = prompt("Enter Name to search:");
            if (searchName !== null) {
                let found = false;
                for (let c of contacts) {
                    if (c.name.toLowerCase() === searchName.toLowerCase()) {
                        let status = c.availability ? "Available" : "Busy";
                        alert(`${c.name} is a ${c.role} and is currently ${status}.`);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    alert("Contact not found. :(");
                }
            }
            break;

        default:
            alert("Invalid action. What did you do? Try again!");
    }
}

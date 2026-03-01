// We declared (given) the first contacts
let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

// I added a variable that will store the user's chosen action
let action;

// While loop that lets the program runs until the user wants to end it
while (true) {

    // Ask the user what does he or she wants from this 5 actions
    action = prompt("Choose action: first ~ last ~ all ~ new ~ quit").toLowerCase();

    // If the user selects quit, terminate the program
    if (action === "quit") {
        alert("Program terminated.");
        break;
    }

    // Still, I used conditional execution using switch-case
    // This determines which block of code will execute
    switch (action) {

        // For the first contact
        case "first":
            let first = contacts[0];
            alert(`${first.name} / ${first.phone} / ${first.email}`);
            break;

        // For the last contact
        case "last":
            let last = contacts[contacts.length - 1];
            alert(`${last.name} / ${last.phone} / ${last.email}`);
            break;

        // For all of the contact
        // Uses a for loop to call all the contacts
        case "all":
            let allContacts = "";
            for (let contact of contacts) {
                allContacts += `${contact.name} / ${contact.phone} / ${contact.email}\n`;
            }
            alert(allContacts);
            break;

        // If the user wants a new contact to be added
        case "new":
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");

            // Validate that all required fields are provided
            if (name && phone && email) {
                contacts.push({ name, phone, email });
                alert("Contact added successfully.");
            } else {
                alert("All fields are required.\nYou missed something, hehe, so no contact was added!");
            }
            break;
        
        // If the user enters invalid option at the start of the program execution
        default:
            alert("Invalid option.");
    }
}

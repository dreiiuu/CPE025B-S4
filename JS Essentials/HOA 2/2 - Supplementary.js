// Starting Data (given from the supplementary)
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"}, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"},
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"}];

let action;

// While true, the Main Menu continues to run
while (true) {

    action = prompt(
        "Welcome back!\n" +
        "Andrei, the contact manager.\n\n" +
        "Choose action:\n" +
        "show   - Display contact by index\n" +
        "all    - Display all contacts\n" +
        "add    - Add new contact\n" +
        "search - Search by name\n" +
        "quit   - Exit program"
    );

    // If user presses any that isn't present in the choices, it will return to main menu
    if (action === null) {
        continue;
    }
    
    // Uppercase are switch to lower ones to match the wordings given from the choices
    action = action.toLowerCase();

    if (action === "quit") {
        alert("Program terminated.");
        break;
    }

    switch (action) {
        // show only the specific contact by index [0, 1, 2, 3...]
        case "show":
            let indexInput = prompt("Enter contact index number (starting from 0):");
            if (indexInput === null) break;
            let index = Number(indexInput);

            if (!isNaN(index) && index >= 0 && index < contacts.length) {
                let c = contacts[index];
                alert(`${c.name}\nPhone: ${c.phone}\nEmail: ${c.email}`);
            } else {
                alert("Invalid index. Contact does not exist.");
            }
            break;

        // Literally display all the present contacts
        case "all":
            if (contacts.length === 0) {
                alert("Contact list is empty.");
                break;
            }

            let list = "";
            // For loop as it loops to call all contacts :)
            for (let i = 0; i < contacts.length; i++) {
                list += `${i}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
            }
            alert(list);
            break;

        // Simply adding a new contact and will not save if there is an absent/blank/skipped fields
        case "add":
            let name = prompt("Enter Name:");
            if (name === null) break;
            let phone = prompt("Enter Phone:");
            if (phone === null) break;
            let email = prompt("Enter Email:");
            if (email === null) break;
            if (name.trim() !== "" && phone.trim() !== "" && email.trim() !== "") {
                contacts.push({ name, phone, email });
                alert("Contact added successfully.");
            } else {
                alert("All fields are required.\nYou missed something, hehe, so no contact was added!");            }
            break;
            
        // Use search by finding the name of the user
        case "search":
            let searchName = prompt("Enter Name to search:");
            if (searchName === null) break;
            let found = false;

            // A for loop again, but this time it checks the equivalency from name byh comparing it
            // If it matches the name, it displays the contact of the person
            for (let contact of contacts) {
                if (contact.name.toLowerCase() === searchName.toLowerCase()) {
                    alert(`Contact Found:\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert("Sadly, there was contact not found. ");
            }
            break;

        // If invalid, it will return to the mauin menu
        default:
            alert("Invalid option. Please choose from the menu.");
    }
}

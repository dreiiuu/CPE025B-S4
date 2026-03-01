// Our contacts
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

// Procedure 1: Show single contact
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

// Procedure 1: Show all contacts
let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        let output = "";
        for (let contact of contacts) {
            output += `${contact.name} / ${contact.phone} / ${contact.email}\n`;
        }
        alert(output);
    }
}

// Procedure 1: Add new contact
let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
        let last = contacts[contacts.length - 1];
        alert(`Added:\n${last.name} / ${last.phone} / ${last.email}`);
    } else {
        alert("All fields are required.\nYou missed something, hehe, so no contact was added!");
    }
}

// Procedure 2: Sort contacts by field [it could be name, phone, or email]
let sortContacts = function(contacts, field) {
    if (!(contacts instanceof Array)) return;
    if (!["name", "phone", "email"].includes(field)) return;

    contacts.sort((a, b) => {
        let valA = a[field].toLowerCase();
        let valB = b[field].toLowerCase();
        if (valA > valB) return 1;
        else if (valA < valB) return -1;
        else return 0;
    });

    let output = `Contacts sorted by ${field}:\n`;
    for (let i = 0; i < contacts.length; i++) {
        output += `${i}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
    }
    alert(output);
}

// Main program with switch-case so we are freely to choose
while (true) {
    let action = prompt("Choose action: show ~ all ~ add ~ sort ~ quit");
    if (action === null) continue;

    action = action.toLowerCase();

    if (action === "quit") {
        alert("Program terminated.");
        break;
    }

    switch (action) {
        case "show":
            let indexInput = prompt("Enter contact index:");
            if (indexInput !== null) {
                showContact(contacts, Number(indexInput));
            }
            break;

        case "all":
            showAllContacts(contacts);
            break;

        case "add":
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");
            addNewContact(contacts, name, phone, email);
            break;

        case "sort":
            let field = prompt("Sort by which field? (name / phone / email)");
            if (field !== null) {
                sortContacts(contacts, field.toLowerCase());
            }
            break;

        default:
            alert("Invalid option.");
    }
}

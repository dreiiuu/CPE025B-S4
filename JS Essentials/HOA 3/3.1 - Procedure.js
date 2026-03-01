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

// showContact function
// It satisfies the given arguments
function showContact(contactList, index) {
    if (!(contactList instanceof Array)) return;
    if (typeof index !== "number") return;

    if (index >= 0 && index < contactList.length) {
        let c = contactList[index];
        alert(`${c.name} / ${c.phone} / ${c.email}`);
    } else {
        alert("Invalid index.");
    }
}

// showAllContacts function
// same, it also satisifes the given argument
function showAllContacts(contactList) {
    if (!(contactList instanceof Array)) return;
    let output = "";
    for (let i = 0; i < contactList.length; i++) {
        output += `${i}: ${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}\n`;
    }
    alert(output);
}

// addNewContact function
// Lastly, yes, it satisfies this one as well
function addNewContact(contactList, name, phone, email) {
    if (!(contactList instanceof Array)) return;
    if (!name || !phone || !email) return;
    contactList.push({ name, phone, email });

    // Show the newly added contact
    let last = contactList[contactList.length - 1];
    alert(`Added:\n${last.name} / ${last.phone} / ${last.email}`);
}

// The main program (switch-case)
// Simply displaying through a switch-case statement

while (true) {
    let action = prompt("Choose action: show / all / add / quit");
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

        default:
            alert("Invalid option.");
    }
}

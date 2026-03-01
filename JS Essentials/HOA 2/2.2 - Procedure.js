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

// I added an action to show prompt and choose three moves
// If the user wants the first or last contact, or add another contact
let action = prompt("Choose action: first / last / new").toLowerCase();


// In this case, I use the switch case for the three conditional execution
// I also used break for easy termination after the condition was satisfied.
switch (action) {
    case "first":
        let first = contacts[0];
        alert(`${first.name} / ${first.phone} / ${first.email}`);
        break;

    case "last":
        let last = contacts[contacts.length - 1];
        alert(`${last.name} / ${last.phone} / ${last.email}`);
        break;

    case "new":
        let name = prompt("Enter name:");
        let phone = prompt("Enter phone:");
        let email = prompt("Enter email:");

        if (name && phone && email) {
            contacts.push({ name, phone, email });
            let newLast = contacts[contacts.length - 1];
            alert(`Added:\n${newLast.name} / ${newLast.phone} / ${newLast.email}`);
        } else {
            alert("All fields are required.\nYou missed something, hehe, so no contact was added!");
        }
        break;

    default:
        alert("Invalid option.");
}

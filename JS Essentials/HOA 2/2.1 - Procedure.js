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

// we get new contact data from user
let name = prompt("Enter contact name:");
let phone = prompt("Enter contact phone:");
let email = prompt("Enter contact email:");

// now we add new contact to the end of the list
contacts.push({
    name: name,
    phone: phone,
    email: email
});

// declare first that the last will be calling the last contact from the length - 1
let last = contacts.length - 1;

// display the first and last contact
// I also tried also using the alert m it is pop up that notifies/alerts the user 
console.log("First contact:", `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log("Last contact:", `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
// For our Vehicle class, we created id, its type, and if it available or deployed
class Vehicle {
    constructor(id, type) {
        // We initialize the vehicle, ID type, and current status
        this.id = id; 
        this.type = type;    
        this.isDeployed = false;
    }
}


// For the FleetManager, just a empty array to store all the vehicles
class FleetManager {
    constructor() {
        this.vehicles = [];
    }

    // We need to add the vehicle object so I used the .push() method here
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    // We will deploy the vehicle base on its ID
    deployVehicle(id) {
        // Find the vehicle in the fleet with its specific ID
        const vehicle = this.vehicles.find(v => v.id === id);
        if (vehicle) {
            vehicle.isDeployed = true; // Change status to deployed if it is deployed
        }
        // Returns undefined if the vehicle ID doesn't exist
        return vehicle;
    }

    // Gather all the vehicles that are not deployed yet
    getAvailableVehicles() {
        // We filter the array and only return values wherein if the vehicle is available
        return this.vehicles.filter(v => !v.isDeployed);
    }
}

// Let us now try my final code!

// *** Test Entity Instantiation ***
// Checks if a single vehicle object is created
console.log("*** Test Entity Instantiation***");
const testVehicle = new Vehicle("V01", "Truck");
console.log(testVehicle);
// Expect: Vehicle object with id: V01, type: Truck, isDeployed: false

// *** Test Composition and Insertion ***
// Herem it adds multiple vehicles to the fleet and check its fleet size
console.log("\n*** Test Composition and Insertion***");
const fleet = new FleetManager();
fleet.addVehicle(testVehicle);
fleet.addVehicle(new Vehicle("V02", "Van"));
fleet.addVehicle(new Vehicle("V03", "Drone"));
console.log(fleet.vehicles.length);
// Expect: 3


// *** Test State Mutation ***
// Now, we deploy and check its deployment status
console.log("\n*** Test State Mutation ***");
fleet.deployVehicle("V02");
const deployedVehicle = fleet.vehicles.find(v => v.id === "V02");
console.log(deployedVehicle.isDeployed);
// Expect: true


// *** Test Data Filtering ***
// Simply, gathering all the available vehicles
console.log("\n*** Test Data Filtering ***");
const available = fleet.getAvailableVehicles();
console.log(available.length);
// Expect: 2
console.log(available.map(v => v.id));
// Expect: [ 'V01', 'V03' ]

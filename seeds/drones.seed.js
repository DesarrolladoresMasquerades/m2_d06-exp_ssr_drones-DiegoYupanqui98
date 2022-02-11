// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

require('../db/index')

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.deleteMany()
.then(()=>{
Drone.create(drones)
.then((dronesObj)=>{
    console.log(`${dronesObj.length} drones have added to the database`)
    mongoose.connection.close()
})
})
.catch(error=>console.log(`An error ocurred: ${error}`))



/*
Steps you should follow in this iteration:

Go to the Drone.model.js file in the models folder. Use Mongoose schema and make sure that the Drone model has all the properties listed above. Hint: Don't forget to export the Drone model.
In the seeds/drones.seeds.js file:
Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones.
Establish a connection to the database. You can use the same code in db/index.js.
Once the database connection is established, call the Drone model's .create() method with the array as an argument.
If the .create() method successfully creates the drones collection, output (using console.log()) how many drones have been created. In case, the seeding of the database fails, catch the error and output it.
Run the seed file with node to seed your database.
Check if the drones collection is successfully created through the Compass and check the output in the terminal.
Hint 1: In case you are struggling with drones' characteristics, you can use this array in your seed file:

Hint 2: Don't forget to close the connection with the database after you have seeded the database. You are familiar with mongoose.connection.close() approach, but you can also check the .disconnect() Mongoose method. Click here to search through Mongoose docs.
*/
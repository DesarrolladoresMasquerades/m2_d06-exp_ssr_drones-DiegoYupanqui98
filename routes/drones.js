const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then((finded)=>{
    console.log(`${finded.length} drones finded.`)
    res.render("drones/list",{drones:finded})
  })
  .catch(error => console.log(`Error: ${error}`))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  Drone.create(req.body)
  .then(()=> res.redirect("/drones"))
  .catch(error => res.redirect("/drones/create"))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const id = req.params.id;
  Drone.findById(id).then(drone=>
  res.render("drones/update-form",drone))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  Drone.findOneAndUpdate(req.params.id,{name, propellers, maxSpeed})
  .then(updatedDrone=>console.log(updatedDrone))
  .then(()=> res.redirect("/drones"));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.deleteOne({"_id" : req.params.id})
  .then(()=> res.redirect("/drones"))
});

module.exports = router;

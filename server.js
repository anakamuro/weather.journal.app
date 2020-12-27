// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();
/* Middleware*/
app.get("/route", function(req, res) {
  res.send(projectData);
});
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));
// Initialize the main project folder

const fakeData = {
  animal: 'lion',
  fact: 'lions are fun'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res){
  res.send(fakeData)
}


const animalData = []

app.get('/all', getData)

function getData(req, res){
  res.send(animalData)
  console.log(animalData)
}


app.post('/addAnimal', addAnimal);

function addAnimal(req,res){
  console.log(req.body)
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}

const port = 3000;
app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
}




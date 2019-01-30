let express = require('express');
let fs = require('fs');
let app = express();
let dataFile = require('./flights.json');
let bodyParser = require('body-parser');
const querystring = require('querystring');

// let getFlightById = 


var http = require('http'),
    url = require('url'),
    query = url.parse(req.url,true).query;

    app.get(query, (req, res, next) => {
      // var query = url.parse(req.url,true).query;
      res.end(JSON.stringify(query));
      // fs.writeFileSync('departures.json', departuresFile);
      // fs.readFile('departures.json', function(err, data){
      //   console.log(data);
      //   res.end(data);
      // })
    });

// http.createServer(function (req, res) {
    
//     res.end(JSON.stringify(query));
// }).listen(3333);
// console.log("Server running at http://localhost:3333/");





// let dataFile = "";

//parse incoming requests data
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// fs.readFile('./users.json', 'utf8', (err, fileContents) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   try {
//     dataFile = JSON.parse(fileContents)
//     console.log(dataFile);
//   } catch (err) {
//     console.error(err)
//   }
// });

// let test = JSON.stringify(dataFile); 
// fs.writeFileSync('test.json', test);  

let arrivals = dataFile.filter(flight => flight.ArrDep == 'A');
let arrivalsFile = JSON.stringify(arrivals);
let departures = dataFile.filter(flight => flight.ArrDep == 'D');
let departuresFile = JSON.stringify(departures);
let flightnumber = dataFile.filter(flight => flight.FlightNo == flightNumber);
// fs.writeFileSync('arrivals.json', arrivals);

app.get("/flights", (req, res, next) => {
  // res.end(dataFile);
//   res.status(200).send({
// test
//   })

  fs.readFile("flights.json", function(err, data){
    console.log(data);
    res.end(data);
  })
});

app.get("/flights/arrivals", (req, res, next) => {

  fs.writeFileSync('arrivals.json', arrivalsFile);
  fs.readFile('arrivals.json', function(err, data){
    console.log(data);
    res.end(data);
  })
});

app.get("/flights/departures", (req, res, next) => {

  fs.writeFileSync('departures.json', departuresFile);
  fs.readFile('departures.json', function(err, data){
    console.log(data);
    res.end(data);
  })
});

app.get("/flights/{flightNumber}", (req, res, next) => {

  fs.writeFileSync('departures.json', departuresFile);
  fs.readFile('departures.json', function(err, data){
    console.log(data);
    res.end(data);
  })
});

// function searchByKey(arr, key){
//   for(let counter = 0, length = arr.length; counter < length; counter++){
//     // console.log("counter: ", counter);
//     // console.log("length: ", length);
//     console.log(arr);
//     // if(arr[counter]['Key'] === key){
//     // return arr[counter]['Values'];
//     // }
//   }
//   return false;
// }

// let jsonfile = JSON.parse(dataFile);
// let jsonstring = JSON.stringify(dataFile);

// get all todos
// app.get('/test', (req, res) => {
//   res.status(200).send({
//     success: 'true',
//     message: 'todos retrieved successfully',
//     todos: jsonstring
//   })
// });


// app.get("/listNames", (req, res, next) =>{

// });

// app.get("/listNames", (req, res, next) => {
  
//  fs.readFile(dataFile, function(err, data){
//    let test = JSON.parse(data);
//    console.log(test);
//   //  let test = searchByKey(data, "name");

//   // //  console.log(test);
//   //  console.log(err);   
//   // //  console.log(d;
//   //  res.end(test);
//   //  console.log(data);
//   console.log(test);
//    res.end(test);
//  })
// });

// var user = {
//   "user4": {
//     "name": "mohit",
//     "password": "password4",
//     "profession": "teacher",
//     "id": 4
//   }
// }

// app.post("/addUsers", (req, res, next) => {
//   fs.readFile(dataFile, function (err, data) {
//     data = JSON.parse(data);
//     data["user4"] = user["user4"];
    
//     console.log(data);
//     res.end(JSON.stringify(data));
//   })
// });


app.listen(3000, () => {
  console.log('Server running on port 3000')
});
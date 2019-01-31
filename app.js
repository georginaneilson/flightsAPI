const express = require('express');
const app = express();
const dataFile = require('./flights.json');

app.get("/flights", (req, res, next) => {
res.send(dataFile);
});

app.get("/flights/arrivals", (req, res, next) => {
  const arrivals = dataFile.filter(flight => flight.ArrDep == 'A');
  res.send(arrivals);
});

app.get("/flights/departures", (req, res, next) => {
  const departures = dataFile.filter(flight => flight.ArrDep == 'D');
  res.send(departures);
});

app.get('/test/:userId', function (req, res) {
  console.log(req.params);
  let params = req.params.userId;
  let id = params.userId;
  console.log(id);
  let idFound = dataFile.filter(flight => flight.FlightNo == id);
  console.log(idFound);
  res.send(idFound);
})

 // Handle 404
 app.use(function (req, res) {
   res.status(404).send('404: File not found');
  //  res.render('404.jade', {
  //    title: '404: File Not Found'
  //  });
 
 });

 // Handle 500
 app.use(function (error, req, res, next) {
   res.status(500).send('Internal server error: ' + error);
 });

app.listen(3000, () => {
  console.log('Server running on port 3000')
});
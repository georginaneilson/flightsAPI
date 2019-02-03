const express = require('express');
const app = express();
let dataFile = require('./flights.json');

//BEGIN: routes
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

app.get('/flights/flight/:flightId', function (req, res) {
  let params = req.params.flightId;
  let flightNo = dataFile.filter(flight => flight.FlightNo == params);
  res.send(flightNo);
})

//BEGIN: Error handling

// Let the user know the API doesnt (currently) take post/delete/put
app.post('*', function (req, res) {
  res.status(404).json({
    status: '404',
    message: 'API does not accept POST'
  });
});

app.put('*', function (req, res) {
  res.status(404).json({
    status: '404',
    message: 'API does not accept PUT'
  });
});

app.delete('*', function (req, res) {
  res.status(404).json({
    status: '404',
    message: 'API does not accept DELETE'
  });
});

// }

// Handle 404s
app.use(function (req, res) {
  res.status(404).json({
    status: '404',
    message: 'File not found'
  });
});

// Handle 500s
app.use(function (error, req, res, next) {
  res.status(500).json({
    status: '500',
    message: 'Internal server error: ' + error
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000')
});
const { fetchMyIP, fetchCoordsByIP, fetchIssFlyOverTimes, nextIssTimesForMyLocation } = require('./iss_promises');

// fetchMyIP()
//   .then(body => console.log(body));

//   fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(body => console.log(body));

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchIssFlyOverTimes)
  .then(body => console.log(body));
  
  nextIssTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
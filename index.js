const drivers = ['driver1', 'driver2', 'driver3', 'driver4', 'driver5'];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 
console.log(selectingDrivers[0](drivers)); 
console.log(selectingDrivers[1](drivers)); 
console.log(createFareMultiplier(2)(10));
console.log(fareDoubler(10)); 
console.log(fareTripler(10));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 

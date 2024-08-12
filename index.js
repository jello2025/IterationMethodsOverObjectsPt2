const cities = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];

//q1

function getCityPopulation(city) {
  return city["population"];
}
console.log(getCityPopulation(cities[0]));

//q2

function isPopulationAboveThreshold(city, threshold) {
  if (city["population"] >= threshold) {
    return true;
  } else {
    return false;
  }
}

console.log(isPopulationAboveThreshold(cities[1], 2000000));

//q3

function addCity(cities, city) {
  cities.push(city);
  return cities;
}

let newAddedCity = {
  id: "idk",
  population: 3,
  country: "i really don know",
};

console.log(addCity(cities, newAddedCity));

//q4

function countCitiesInCountry(cities, country) {
  let count = 0;
  cities.forEach((city) => {
    if (city.country == country) {
      count = count + 1;
    }
  });

  return count;
}

console.log(countCitiesInCountry(cities, "France"));

// Created the class "WeatherDashboard" to initialize the private properties needed
class WeatherDashboard {
  // the cities and the weatherData
  #cities;
  #weatherData;

  constructor() {
    // Simply stores our city names and avoid duplicate data/entries
    // For Map, we store it by key-value pairs wherein the key is the city name and the value is for the object of our weather data 
    this.#cities = new Set();
    this.#weatherData = new Map();
  }

  addCity(city) {
    // Simply adding the city name string to the set
    this.#cities.add(city);
  }

  async syncData(fetchFunction) {
    // Iterates to check the cities and calls the function for each city. After that, it requests data by using Promise.all() and to store the resolved data of the weather in the Map. 
    // Error handling is implemented so that a failed request doesn't interrupt the synchronization of other cities.
    const promises = [...this.#cities].map(async (city) => {
      try {
        const result = await fetchFunction(city);
        // Store the weather data in the Map
        this.#weatherData.set(result.city, result.weather);
      } catch (error) {
        console.log(`Error fetching ${city}: ${error.message}`);
      }
    });
    await Promise.all(promises);
  }

  getHottestCity() {
    // First, we check if the Map is empty, if no, it checks and loops for each entry data in the Map. 
    if (this.#weatherData.size === 0) {
      return null;
    }

    let hottestCity = null;
    let highestTemp = -Infinity;

    // Once it gathered all data, it compares the temperature values and gets the highest temperature and return that city name.
    for (const [city, { temp }] of this.#weatherData) {
      if (temp > highestTemp) {
        highestTemp = temp;
        hottestCity = city;
      }
    }
    return hottestCity;
  }
}

// Do not modify! Test code

// Mock fetch function simulating an API call
const mockWeatherFetch = async (city) => {
  const delay = Math.floor(Math.random() * 500) + 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city === 'Atlantis') reject(new Error('City not found'));

      const mockData = {
        Oslo: { temp: -5, wind: 12 },
        Manila: { temp: 32, wind: 5 },
        Tokyo: { temp: 15, wind: 8 },
      };

      resolve({ city: city, weather: mockData[city] || { temp: 20, wind: 2 } });
    }, delay);
  });
};

const dashboard = new WeatherDashboard();

dashboard.addCity('Oslo');
dashboard.addCity('Manila');
dashboard.addCity('Tokyo');
dashboard.addCity('Oslo');
dashboard.addCity('Atlantis');

(async () => {
  console.log('Synchronizing data...');
  await dashboard.syncData(mockWeatherFetch);

  console.log('Hottest city is:', dashboard.getHottestCity());
})();

const request = require('request');

const url = 'https://api.darksky.net/forecast/a33639af39e09017cf8de46ad4b4427f/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`)
});

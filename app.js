const request = require('request');
const geocode = require('./utils/geocode.js')

// const url = 'https://api.darksky.net/forecast/a33639af39e09017cf8de46ad4b4427f/37.8267,-122.4233?units=si';

// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to the weather service.');
// 	} else if (response.body.error) {
// 		console.log(`Unable to find location. ${response.body.error}`);
// 	} else {
// 		console.log(
// 			`${response.body.daily.data[0].summary} It is currently ${response.body.currently
// 				.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`
// 		);
// 	}
// });

geocode('London', (error, data) => {
	console.log('Error', error)
	console.log('Data', data)
});

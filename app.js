const request = require('request');

const url = 'https://api.darksky.net/forecast/a33639af39e09017cf8de46ad4b4427f/37.8267,-122.4233?units=si';

const geocodeUrl =
	'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmxhZHRnZW9yZ2lldiIsImEiOiJjazIyYno5ZWIxbjl0M2VxdGVxeGZxaGJsIn0.D-MQllZhGMdiTA15qKMjgw&limit=1';

request({ url: url, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to the weather service.');
	} else if (response.body.error) {
		console.log(`Unable to find location. ${response.body.error}`);
	} else {
		console.log(
			`${response.body.daily.data[0].summary} It is currently ${response.body.currently
				.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`
		);
	}
});

request({ url: geocodeUrl, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to location services.');
	} else if (response.body.features.length === 0) {
		console.log('Unable to find location. PLease try another search.');
	} else {
		const latitude = response.body.features[0].center[1];
		const longitude = response.body.features[0].center[0];
		console.log(latitude, longitude);
	}
});

const request = require('request');

const url = 'https://api.darksky.net/forecast/a33639af39e09017cf8de46ad4b4427f/37.8267,-122.4233?units=si';

const geocode =
	'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmxhZHRnZW9yZ2lldiIsImEiOiJjazIyYno5ZWIxbjl0M2VxdGVxeGZxaGJsIn0.D-MQllZhGMdiTA15qKMjgw&limit=1';

request({ url: url, json: true }, (error, response) => {
	console.log(
		`${response.body.daily.data[0].summary} It is currently ${response.body.currently
			.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`
	);
});

request({ url: geocode, json: true }, (error, response) => {
	const latitude = response.body.features[0].center[1];
	const longitude = response.body.features[0].center[0];
	console.log(latitude, longitude);
});

const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/a33639af39e09017cf8de46ad4b4427f/${latitude},${longitude}?units=si`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to the weather service.');
		} else if (response.body.error) {
			callback(`Unable to find location. ${response.body.error}`);
		} else {
			callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently
                				.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`);
		}
	});
};

module.exports = forecast;
const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=752d55bf8c21686052fa5481e3f46946&query=${lat},${long}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          `. It is currently ${body.current.temperature} degree out. It feels like ${body.current.feelslike} degrees out. There is a ${body.current.precip}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;

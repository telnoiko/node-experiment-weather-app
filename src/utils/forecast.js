const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const weather_url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_TOKEN}&query=${longitude},${latitude}`;
    request({ url: weather_url, json: true }, (error, { body } = {} ) => {
        if(error) {
            callback(`Could not connect to weather service!!`)
        } else if (body.error) {
            callback(`Could not load weather data!`)
        } else {
            const data = body.current
            // console.log(`Got forecast: ${JSON.stringify(body, null, 4)}`)
            const weather_data = {
                country: body.location.country,
                region: body.location.region,
                name: body.location.name,
                description: data.weather_descriptions[0], 
                temperature: data.temperature,
                precip: data.precip,
                feels: data.feelslike
            }
            callback(undefined, weather_data)
        }
    })
}

module.exports = forecast
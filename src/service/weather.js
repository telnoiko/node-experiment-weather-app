const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const displayForecast = (location, callback) => geocode(location, (error, { latitude, longitude} = {} ) => {
    if(error) {
        const error = {
            error: "Couldn't geocode address"
        }
        return callback(error, undefined)
    }

    forecast(latitude, longitude, (error, {description, country, name, temperature, feels, precip} = {}) => {
        if(error) {
            const error = {
                error: "Couldn't get forecast"
            }
            return callback(error, undefined)
        }

        const weather = {description, country, name, temperature, feels, precip}

        console.log(`${description}. In ${country}, ${name} it is currently ${temperature} degrees and it feels like ${feels}. The chance of rain is ${precip} %`)
        callback(undefined, weather);
    })
})

module.exports = displayForecast
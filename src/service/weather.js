const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const displayForecast = (location, callback) => geocode(location, (error, { latitude, longitude} = {} ) => {
    if(error) {
        const error = {
            error: "Couldn't geocode address"
        }
        return callback(error, undefined)
    }

    forecast(latitude, longitude, (error, {description, country, region, name, temperature, feels, precip} = {}) => {
        if(error) {
            const error = {
                error: "Couldn't get forecast"
            }
            return callback(error, undefined)
        }
        const weather = {description, country, region, name, temperature, feels, precip}
        callback(undefined, weather);
    })
})

module.exports = displayForecast
const request = require('postman-request')

const geocode = (address, callback) => {
    const geocoding_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`
    request({ url: geocoding_url, json: true }, (error, { body } = {} ) => {
        if(error) {
            callback(`Could not connect to location service!`)
        } else if (body.features.length == 0) {
            callback(`Could not load location data!`)
        } else {
            const location = body.features[0]
            geodata = {
                location: location.place_name,
                latitude: location.center[0],
                longitude: location.center[1]
            }
            callback(undefined, geodata)
        }
    })
}

module.exports = geocode

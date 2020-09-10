const request = require('request')

const geocode = (address = 'Paris', callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + '&appid=3b66a8f68fbbff5c9b3824bc74fc6cf4'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.cod === '404') {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: body.name
            })
        }
    })
}

module.exports = geocode
console.log('Client side javascript file is loaded!')

const getWeather = (location) => fetch(`/weather?address=${location}`).then((response) => {
    return Promise.resolve(response.json())
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    message1.textContent = 'Loading...'

    getWeather(location).then((data) => {
        console.log(`received data: ${JSON.stringify(data)}`)
                
        if(data.error) {
            message1.textContent = data.error
        } else {
            message1.textContent = `In ${data.country}, ${data.region}, ${data.name} it is ${data.temperature} now! It feels like ${data.feels}, precipitation probability is ${data.precip}.`
        }
    })
})
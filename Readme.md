## Weather App
This simple Node.JS app displays the weather for a given location. 

It uses the [MapBox](https://mapbox.com) API to get the coordinates of the location, and 
the [WeatherStack](https://weatherstack.com) API to get the weather data.

It is deployed here - https://telnoiko-weather-app.fly.dev

## How to run locally
Install NodeJS and NPM. Then run the following command in the root directory of the project.
```js
npm run start
```
It will spin up the app on the port 8080. You can access it at http://localhost:8080

In order to get downstream API working you need to register for free accounts on both
[MapBox](https://mapbox.com) and [WeatherStack](https://weatherstack.com) and get the API keys. 
Then create a file called `.env` in the root directory of the project and add the following lines to it:

```js
WEATHERSTACK_TOKEN=<your-weatherstack-token>
MAPBOX_TOKEN=<your-mapbox-token>
```

Then restart the app.
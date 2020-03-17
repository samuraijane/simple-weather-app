# simple-weather-app

### Installation

1. Open an instance of command tool that recognizes `git` commands
2. `git clone https://github.com/samuraijane/simple-weather-app.git`
3. `cd simple-weather-app`
4. `npm install`
5. `npm run start`
6. Open `localhost:3001` in Chrome

### Note

If you wish to use your own server and API keys, create a `.env` file that lives in the root of the project with your credentials

```sh
LOCATION_API_KEY=<someKey>
WEATHER_API_KEY=<someOtherKey>
```

You will also need to update the endpoints for _location_ and _weather_ in the `/routes` directory

### APIs

This application uses [ZipCodeApi](https://www.zipcodeapi.com/) and [OpenWeather](https://openweathermap.org/) for data. We thank the creators of these APIs for making this data available and easy to consume.

### Tech Stack

##### Development

1. [Gulp](https://gulpjs.com/) task runner, [Nodemon](https://www.npmjs.com/package/nodemon) and Chrome's [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) extension for browser refreshing on save.
2. [Babel](https://babeljs.io/) but only as a dependency for other packages.
3. This project is not built on create-react-app and does not use Webpack. That isn't to say we are against using these tools, we simply decided not to for this round.

##### UI

1. Styling with SCSS compilers
2. Interactivity with vanilla JavaScript
3. Structure will HTML

##### Deployment

1. [Express](https://www.npmjs.com/package/express) server on [Heroku](https://www.heroku.com/)
2. [node-fetch](https://www.npmjs.com/package/node-fetch) on the server in order to hide API keys and not call them directly from the client

### Test Suites

This project does not include any automated tests.

### Browser Compatibility

We are grateful that we did not have a business analyst reminding us that some people still use Internet Explorer. As this app uses CSS Grid extensively, do not look at in IE as it may cause depression and judgemental feelings that you need to let go of anyway.
We guarantee only that it will work flawlessly in Chrome on a Mac. If there are broken components when using other operating systems and browsers, we may get to them... eventually.

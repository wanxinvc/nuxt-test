# nuxt-test

## Build Setup

You need to have a recent version of Node.js installed on your machine (tested on v14 LTS).

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Test Instructions

Please install and start (serve) the app locally as described above. Once the app is running, you will find the
web app running on [http://localhost:3000](http://localhost:3000). Available tailwindCSS options can be found at
[http://localhost:3000/_tailwind/](http://localhost:3000/_tailwind/) once the web app is running locally.

### Tasks 

The manager of the company thinks that the website homepage is boring. Because he likes golfing in his free time, the
designer has suggested to connect the frontend to a weather API and pull the current weather to display on the website
(the company is located in Basel, Switzerland).

A colleague from the IT department has already kindly prepared the API configuration in the store module of the web
application. However, he did not have time to finish the work before holiday. You are now asked to complete the
colleague's task. In particular, the store action needs to be called, data comited to the application state and bind
the state to the UI. As for displaying the current weather conditions in the UI, the designer has not given any
particular instructions (you are free to design it). However, it would be nice to have icons to depict the current
weather conditions.

The Software Architect has given three key advices: he wants to keep the application modular and thus work with
components. He also insists on using proper state management with Vuex. As for styling the application, we should
use tailwindCSS as much as possible so that we can update the corporate design system anytime.

Some links to get you started with the API (OpenWeatherMap):

- [Example API response](http://api.openweathermap.org/data/2.5/weather?q=Basel&appid=3978da9f7417a95247e8f31df0cf1f27)
- [API endpoint documentation](https://openweathermap.org/current)
- [Weather condition icons](https://openweathermap.org/weather-conditions)

#### Bonus Tasks

1. API error handling: use the included ```vue-toasted``` to show a toast notification if the API call fails (available
   as ```this.$toast```).
1. Move all weather state data and related methods into a separate store module ```weather.js```.

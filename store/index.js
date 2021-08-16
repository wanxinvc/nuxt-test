import axios from 'axios'

/*
 * Config for the OpenWeather API
 * @see https://openweathermap.org/
 */
const weatherApiKey = '3978da9f7417a95247e8f31df0cf1f27'
const weatherLocation = 'Basel'
const weatherApiBaselUrl = `http://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${weatherApiKey}&units=metric`

export const state = () => ({
  loading: true, // app starts in loading mode
  currentWeather: {}
})

export const getters = {
  isLoading: state => state.loading && state.loading === true,
  currentWeather: state => state.currentWeather
}

export const mutations = {
  START_LOADING: (state) => {
    state.loading = true
  },

  END_LOADING: (state) => {
    state.loading = false
  },
  LOAD_WEATHER (state, currentWeather) {
    state.currentWeather = currentWeather
  }
}

export const actions = {
  getWeather ({ commit }) {
    commit('START_LOADING')

    return new Promise((resolve, reject) => {
      const url = weatherApiBaselUrl
      axios.get(url)
        .then((response) => {
          commit('LOAD_WEATHER', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(
          commit('END_LOADING')
        )
    })
  }
}

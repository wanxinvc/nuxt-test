export const actions = {
  nuxtServerInit ({ commit }, { app: { $cookies } }) {
    const weather = $cookies.get('weather')
    if (weather) {
      commit('weather/LOAD_WEATHER', weather)
    }
  }
}

<template>
  <div>
    <div v-if="isLoading()">
      Loading app...
    </div>
    <div v-else>
      <h1>Welcome</h1>
      <p>
        You have reached the landing page of the Logoipsum company. Now, let's get started!
      </p>
      <p>
        The manager of the company thinks that the website homepage is boring. Because he likes golfing in his free
        time, the designer has suggested to connect the frontend to a weather API and pull the current weather to
        display on the website (the company is located in Basel, Switzerland).
      </p>
      <p>
        A colleague from the IT department has already kindly prepared the API configuration in the store module of
        the web application. However, he did not have time to finish the work before holiday. You are now asked to
        complete the colleagues' task. In particular, the store action needs to be called, data comited to the
        application state and bind the state to the UI. As for displaying the current weather conditions in the UI,
        the designer has not given any particular instructions (you are free to design it). However, it would be nice
        to have icons to depict the current weather conditions.
      </p>
      <p>
        The Software Architect has given three key advices: he wants to keep the application modular and thus work
        with components. He also insists on using proper state management with Vuex. As for styling the application,
        we should use tailwindCSS as much as possible so that we can update the corporate design system anytime.
      </p>
      <p>
        Some links to get you started regarding the API:
      </p>
      <ul>
        <li>Example <a target="_blank" href="http://api.openweathermap.org/data/2.5/weather?q=Basel&appid=3978da9f7417a95247e8f31df0cf1f27">API response</a></li>
        <li>API <a target="_blank" href="https://openweathermap.org/current">endpoint documentation</a></li>
        <li>Weather <a target="_blank" href="https://openweathermap.org/weather-conditions">condition icons</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  mounted () {
    this.END_LOADING()
  },
  methods: {
    ...mapActions({
      ...mapGetters(['isLoading']),
      ...mapMutations(['END_LOADING']),
      ...mapActions(['getWeather'])
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-xl font-bold pt-4 pb-12;
}

p {
  @apply max-w-4xl pb-8;
}

ul {
  @apply list-disc ml-4;
}

a {
  @apply text-blue-800;
}
</style>

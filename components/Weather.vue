<template>
  <div v-if="city">
    <div class="flex">
      <div class="weather-icon">
        <img :src="`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`" alt="">
      </div>
      <div class="weather-data">
        <h2>{{ temperature }} <span class="deg">&deg;C</span></h2>
        <p>
          {{ city }}
          <span class="separator">||</span>
          {{ weatherInfo.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  computed: {
    ...mapGetters('weather', [
      'weatherInfo',
      'city',
      'temperature'
    ])
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    @apply text-2xl text-gray-700 font-bold pt-4;
  }

  p {
    @apply text-gray-700 capitalize;
  }

  .deg {
    @apply text-yellow-300;
  }

  .separator {
    @apply text-gray-300;
  }
</style>

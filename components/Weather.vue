<template>
    <div>
        {{ currentWeather().name }}
        {{ currentWeather().main.temp }}
        <img :src="`http://openweathermap.org/img/wn/${currentWeather().weather[0].icon}@2x.png`" alt="">
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'default',
  mounted () {
    this.getWeather()
  },
  methods: {
    ...mapActions({
      ...mapGetters(['currentWeather']),
      ...mapActions(['getWeather'])
    })
  }
}
</script>

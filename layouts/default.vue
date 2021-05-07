<template>
  <div>
    <div class="main">
      <Header />
      <div class="wrapper">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: { Header }
}
</script>

<style lang="scss" scoped>
.main {
  @apply flex flex-col justify-center align-middle min-h-screen;
}

.wrapper {
  @apply w-full max-w-screen-lg flex-grow p-8 m-auto;
}
</style>

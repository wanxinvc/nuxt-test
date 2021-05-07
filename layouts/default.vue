<template>
  <div>
    <div class="main">
      <Header />
      <div class="wrapper">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: { Footer, Header }
}
</script>

<style lang="scss" scoped>
.main {
  @apply flex flex-col pt-20 justify-center min-h-screen;
}

.wrapper {
  @apply w-full max-w-screen-lg flex-grow p-8 m-auto;
}
</style>

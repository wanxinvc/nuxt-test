<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="flex flex-row">
        <div class="w-1/2 p-4">
          &copy; 2021, all rights reserved.
        </div>
        <div class="w-1/2 p-4">
          <a target="_blank" href="https://www.mdpi.com">MDPI AG</a>, St. Alban-Anlage 66, 4052 Basel, Switzerland
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-gray-100 p-4 text-xs text-gray-700;

  &-inner {
    @apply w-full max-w-screen-lg flex-grow m-auto;

    svg {
      @apply w-36;
    }
  }

  a {
    @apply underline text-gray-700;
  }
}
</style>

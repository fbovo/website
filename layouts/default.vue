<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'
// import { MediaQueryProvider } from 'vue-component-media-queries'

// const queries = {
//   mobile: '(max-width: 760px)'
// }

export default Vue.extend({
  // components: {
  //   MediaQueryProvider,
  // },

  computed: {
    hasModal(): boolean {
      return this.$store.getters['menu/hasModal'] || false
    },
  },

  watch: {
    hasModal(payload) {
      const bodyElement = document.querySelector('body')

      if (bodyElement) {
        if (payload) bodyElement.classList.add('-hasModal')
        else bodyElement.classList.remove('-hasModal')
      }
    },
  },
})
</script>

<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    hasModal(): boolean {
      return this.$store.getters['modal/hasModal'] || false
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

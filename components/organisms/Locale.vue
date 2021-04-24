<template>
  <div>
    <span v-if="languages.it > languages.en">Italiano</span>
    <span v-else>English</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface ILanguages {
  en: Number
  it: Number
}

export default Vue.extend({
  name: 'LocaleOrganism',

  computed: {
    languages(): ILanguages {
      if (!navigator || !navigator.language) return { en: 0, it: 0 }

      const locales =
        navigator.languages === undefined
          ? [navigator.language]
          : navigator.languages
      const languages = locales
        .map((locale) => locale.trim().split(/-|_/)[0])
        .reverse()
      const en = Math.max(languages.indexOf('en'), 0)
      const it = Math.max(languages.indexOf('it'), 0)

      return {
        en,
        it,
      }
    },
  },
})
</script>

<template>
  <div v-frag>
    <o-header />
    <main role="main">
      <o-homeIntro />
      <o-homeAbout />
      <o-homeContact />
    </main>
    <o-footer class="-reverse" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import frag from 'vue-frag'

export default Vue.extend({
  name: 'HomePage',

  directives: {
    frag,
  },

  head: () => ({
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'Filippo Bovo: freelance e-commerce solution consultant',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Filippo Bovo: freelance e-commerce solution consultant',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Filippo Bovo: e-commerce consultant, agile full-stack web developer and team leader',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Filippo Bovo: e-commerce consultant, agile full-stack web developer and team leader',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'freelance web developer,freelance ecommerce,ecommerce solutions,ecommerce consultant,magento ecommerce,scrum agile,vuejs developer,frontend engineer,backend engineer',
      },
    ],
  }),
})
</script>

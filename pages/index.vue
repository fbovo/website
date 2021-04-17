<template>
  <div>
    <o-header />
    <main role="main">
      <o-homeIntro />
      <o-homeAbout />
      <o-homeContact />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>

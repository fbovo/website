<template>
  <header class="o-header">
    <div class="o-header__menu">
      <o-headerMenu v-if="!$slots.default" />
      <slot />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderOrganism',
})
</script>

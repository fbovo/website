<template>
  <div class="m-aboutPlanet" @click="$emit('click')">
    <component :is="`a-planet${planet}`" />
    <strong>{{ label }}</strong>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'AboutPlanetMolecule',

  props: {
    label: {
      type: String,
      required: true,
    } as PropOptions<String>,
    planet: {
      type: String,
      required: true,
    } as PropOptions<String>,
  },
})
</script>

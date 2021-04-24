<template>
  <div class="m-aboutOverlay">
    <div class="m-aboutOverlay__close" @click="$emit('close')">
      <a-iconClose />
    </div>
    <div class="m-aboutOverlay__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutOverlayMolecule',
})
</script>

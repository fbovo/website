<template>
  <div class="m-astronaut">
    <div class="m-astronaut__speech">
      <a-speechBubble>
        <slot />
      </a-speechBubble>
    </div>
    <div class="m-astronaut__scene">
      <a-sceneAstronaut />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AstronautMolecule',
})
</script>

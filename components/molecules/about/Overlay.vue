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
// import nm8 from 'nm8'

export default Vue.extend({
  name: 'AboutOverlayMolecule',

  data: () => ({
    fx: undefined,
  }),

  // mounted() {
  //   const el = this.$el // as HTMLElement

  //   el.style.transform = 'translateY(-200%)'

  //   this.fx = nm8((offset) => {
  //     el.style.transform = `translateY(${-200 + offset * 200}%)`
  //   }, 500)
  // },
})
</script>

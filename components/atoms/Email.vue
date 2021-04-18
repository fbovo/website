<template>
  <div class="a-email">
    <input
      v-model="isBot"
      type="checkbox"
      name="contact"
      style="display: none !important"
      tabindex="-1"
      autocomplete="off"
    />
    <a
      href="#"
      data-n="hello"
      data-d="filippobovo"
      data-t="com"
      @click.prevent="onClick"
    ></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IComponentData {
  isBot: boolean
}

export default Vue.extend({
  name: 'EmailAtom',

  data: (): IComponentData => ({
    isBot: false,
  }),

  methods: {
    onClick(event: any) {
      if (process.client && !this.isBot) {
        const data = event.target.dataset
        window.location.href = 'mailto:' + data.n + '@' + data.d + '.' + data.t

        if (window.beampipe) window.beampipe('contact')
      }
    },
  },
})
</script>

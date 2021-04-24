<template>
  <nav class="o-headerMenu" :class="{ '-isOpen': status }">
    <div class="o-headerMenu__toggler" @click="changeStatus(true, '#open')">
      <a-iconMenu />
      Menu
    </div>
    <scrollactive tag="ul" class="o-headerMenu__content">
      <li @click="changeStatus(false, '#close')"><a-iconClose /></li>
      <li v-for="item in items" :key="item.anchor">
        <a
          :href="item.anchor"
          class="scrollactive-item"
          @click="changeStatus(false, item.anchor)"
          >{{ item.label }}</a
        >
      </li>
    </scrollactive>
  </nav>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import Analytics from '~/mixins/analytics'
import data from '~/data/menu/main'

export default (Vue as VueConstructor<
  Vue & InstanceType<typeof Analytics>
>).extend({
  name: 'HeaderMenuOrganism',

  mixins: [Analytics],

  data: () => data,

  computed: {
    status: {
      get(): boolean {
        return this.$store.state.modal.main.active || false
      },
      set(payload: boolean): void {
        this.$store.commit('modal/setActive', { main: payload })
      },
    },
  },

  methods: {
    changeStatus(payload: boolean, track?: string) {
      this.status = payload

      if (track) this.trackEvent(track.replace('#', 'click.header-menu-'))
    },
  },
})
</script>

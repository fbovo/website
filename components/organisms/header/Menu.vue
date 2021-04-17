<template>
  <nav class="o-headerMenu" :class="{ '-isOpen': status }">
    <div class="o-headerMenu__toggler" @click="status = !status">
      <a-iconMenu />
      Menu
    </div>
    <scrollactive
      tag="ul"
      class="o-headerMenu__content"
      @itemchanged="status = ''"
    >
      <li @click="status = ''"><a-iconClose /></li>
      <li v-for="item in items" :key="item.anchor">
        <a :href="item.anchor" class="scrollactive-item">{{ item.label }}</a>
      </li>
    </scrollactive>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
// import nm8 from 'nm8'
import { IMenuItem } from '~/store/menu'

export default Vue.extend({
  name: 'HeaderMenuOrganism',

  data: () => ({
    animation: undefined,
  }),

  computed: {
    items(): IMenuItem[] {
      return this.$store.state.menu.main.items || []
    },
    status: {
      get(): boolean {
        return this.$store.state.menu.main.active === 'true'
      },
      set(payload: boolean): void {
        this.$store.commit('menu/setActive', {
          menu: 'main',
          payload: payload ? 'true' : '',
        })
      },
    },
  },

  // mounted() {
  //   const el = this.$el // as HTMLElement

  //   el.style.transform = 'translateY(-200%)'

  //   this.animation = nm8((offset) => {
  //     el.style.transform = `translateY(${-200 + offset * 200}%)`
  //   }, 500)
  // },

  // methods: {
  //   ...mapMutations('menu', ['setStatus']),
  //   toggleStatus() {
  //     this.setStatus({ menu: 'main', payload: !this.status })

  //     if (process.client && document) {
  //       const body: HTMLElement = document.body
  //       const className: string = '-hasModal'

  //       if (this.status) {
  //         body.classList.add(className)
  //       } else {
  //         body.classList.remove(className)
  //       }
  //     }
  //   },
  // },
})
</script>

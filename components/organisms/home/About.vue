<template>
  <article id="about" class="o-homeAbout">
    <aside class="o-homeAbout__scene">
      <a-sceneAbout />
    </aside>
    <nav class="o-homeAbout__menu">
      <ul>
        <li v-for="item in items" :key="item.anchor">
          <m-aboutPlanet
            :label="item.label"
            :planet="item.icon"
            :class="{
              '-skills': item.anchor === '#skills',
              '-projects': item.anchor === '#projects',
              '-education': item.anchor === '#education',
              '-active': item.anchor === active,
            }"
            @click="active = item.anchor"
          />
          <m-aboutOverlay
            :class="{ '-active': item.anchor === active }"
            @close="active = ''"
          >
            <m-aboutSkills v-if="item.anchor === '#skills'" />
            <m-aboutProjects v-else-if="item.anchor === '#projects'" />
          </m-aboutOverlay>
        </li>
      </ul>
    </nav>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
// import nm8 from 'nm8'
import { IMenuItem } from '~/store/menu'

export default Vue.extend({
  name: 'HomeAboutOrganism',

  data: () => ({
    animation: undefined,
  }),

  computed: {
    items(): IMenuItem[] {
      return this.$store.state.menu.about.items || []
    },
    active: {
      get(): string {
        return this.$store.state.menu.about.active || ''
      },
      set(payload: string): void {
        this.$store.commit('menu/setActive', { menu: 'about', payload })
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

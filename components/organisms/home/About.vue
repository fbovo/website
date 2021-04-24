<template>
  <article id="about" class="o-homeAbout">
    <section class="o-homeAbout__caption">
      <strong>My mission: deliver neat work and enlightment</strong>
      <p>
        Because I'm a completely independent freelancer, I will not try to sell
        you a fancy bespoke thing if you don’t need it. I will only ever
        recommend what is best for your business.
      </p>
    </section>
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
            <m-aboutEducation v-else-if="item.anchor === '#education'" />
          </m-aboutOverlay>
        </li>
      </ul>
    </nav>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import data from '~/data/menu/about'

export default Vue.extend({
  name: 'HomeAboutOrganism',

  data: () => data,

  computed: {
    active: {
      get(): string {
        return this.$store.state.menu.about.active || ''
      },
      set(payload: string): void {
        this.$store.commit('menu/setActive', {
          menu: 'about',
          payload,
          modal: true,
          overlay: false,
        })
      },
    },
  },
})
</script>

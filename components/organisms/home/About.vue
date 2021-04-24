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
              '-active': isActive(item.anchor),
            }"
            @click="setActive(item.anchor, true)"
          />
          <m-aboutOverlay
            :class="{ '-active': isActive(item.anchor) }"
            @close="setActive(`${item.anchor}-close`)"
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
import Vue, { VueConstructor } from 'vue'
import Analytics from '~/mixins/analytics'
import data from '~/data/menu/about'

export default (Vue as VueConstructor<
  Vue & InstanceType<typeof Analytics>
>).extend({
  name: 'HomeAboutOrganism',

  mixins: [Analytics],

  data: () => data,

  methods: {
    isActive(anchor: string) {
      const item = `about${anchor}`

      return (
        this.$store.state.modal[item] && this.$store.state.modal[item].active
      )
    },
    setActive(item: string, track: boolean = false) {
      const payload: { [key: string]: boolean } = {}

      for (let i = 0; i < this.items.length; i++) {
        const { anchor } = this.items[i]

        payload[`about${anchor}`] = anchor === item
      }

      this.$store.commit('modal/setActive', payload)

      if (track) this.trackEvent(item.replace('#', 'click.home-about-'))
    },
  },
})
</script>

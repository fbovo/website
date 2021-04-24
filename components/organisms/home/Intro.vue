<template>
  <article id="intro" class="o-homeIntro">
    <aside class="o-homeIntro__scene">
      <m-introScene />
    </aside>
    <section class="o-homeIntro__content">
      <h1>
        Freelance e-commerce solution architect, team leader, and former
        full-stack developer.
      </h1>
      <nav>
        <scrollactive tag="ul">
          <li>
            <a-cta
              to="#about"
              track="click.intro-about"
              class="scrollactive-item"
              >Discover more</a-cta
            >
          </li>
          <li>
            <a-cta
              to="#contact"
              type="empty"
              track="click.intro-contact"
              class="scrollactive-item"
              >Contact me</a-cta
            >
          </li>
        </scrollactive>
      </nav>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeIntroOrganism',
})
</script>

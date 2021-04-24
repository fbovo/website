<template>
  <div v-frag>
    <main role="main">
      <a-content :data="content" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import frag from 'vue-frag'
import { content, meta } from '~/data/content/en/privacy-policy'

interface IComponentData {
  content: StaticContentData.INode[]
}

export default Vue.extend({
  name: 'PrivacyPolicyPage',

  directives: {
    frag,
  },

  data: (): IComponentData => ({
    content,
  }),

  head: () => ({ meta }),
})
</script>

import Vue, { ComponentOptions } from 'vue'
import { MediaQueryProvider } from 'vue-component-media-queries'

// declare module '@nuxt/types' {
//   interface Context {
//     breakpoints?: Record<string, string>
//   }

//   interface Configuration {
//     breakpoints?: Record<string, string>
//   }
// }

// declare module 'vue/types/vue' {
//   interface Vue {
//     breakpoints?: Record<string, string>
//   }
// }

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    breakpoints?: Record<string, string>
  }
}

export default Vue.extend({
  breakpoints: {
    mobile: '(max-width: 760px)',
  },
  components: {
    'v-breakpoints': MediaQueryProvider,
  },
})

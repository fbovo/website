import Vue from 'vue'

export default Vue.extend({
  methods: {
    trackEvent: (payload: string): void => {
      if (process.client && payload && window.beampipe) {
        window.beampipe(payload)
      }
    },
  },
})

import Vue from 'vue'

export default Vue.extend({
  methods: {
    getSvgData: (name: String) => import(`~/data/svg/${name}.json`),
  },
})

// import SvgMixin from '~/mixins/svg.ts'

// export default (Vue as VueConstructor<
//   Vue & InstanceType<typeof SvgMixin>
// >).extend({
//   mixins: [SvgMixin, vueWindowSizeMixin], // Mixins (https://forum.vuejs.org/t/using-mixins-with-typescript/24256/18)
// })

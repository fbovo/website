<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'CallToActionAtom',

  functional: true,

  props: {
    to: {
      type: String,
      required: true,
    } as PropOptions<String>,
    type: {
      type: String,
      default: '',
    } as PropOptions<String>,
  },

  render: (h, { props, data, children }) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    const component =
      props.to.substring(0, 1) === '#' || urlPattern.test(props.to)
        ? 'a'
        : 'nuxt-link'
    const ctaClass = 'a-cta' + (props.type ? ` -${props.type}` : '')

    data.staticClass =
      (data.staticClass ? data.staticClass + ' ' : '') + ctaClass
    data.props = {
      ...props,
    }

    if (component === 'a') {
      if (!data.attrs) data.attrs = {}

      data.attrs.href = props.to

      delete data.props.to
    }

    delete data.props.type

    children = children.map((c) => {
      return !c.tag && c.text !== undefined && c.text.trim()
        ? h('span', { attrs: { tabindex: '-1' } }, c.text)
        : c
    })

    return h(component, data, children)
  },
})
</script>

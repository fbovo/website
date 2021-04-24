<script lang="ts">
import Vue, { PropOptions, CreateElement, VNode } from 'vue'

export default Vue.extend({
  name: 'CallToActionAtom',

  functional: true,

  props: {
    to: {
      type: String,
      required: true,
    } as PropOptions<string>,
    type: {
      type: String,
      default: '',
    } as PropOptions<string>,
    track: {
      type: String,
      default: '',
    } as PropOptions<string>,
  },

  render: (h: CreateElement, { props, data, children }): VNode => {
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

    // Append CSS class(es)
    data.staticClass =
      (data.staticClass ? data.staticClass + ' ' : '') + ctaClass
    data.props = {
      ...props,
    }

    // Tracking click event
    if (data.props.track) {
      const eventName = 'click.cta-' + data.props.track

      data.on = {
        click: () => {
          if (process.client && eventName && window.beampipe) {
            window.beampipe(eventName)
          }
        },
      }
    }

    // Translate props for anchor tag
    if (component === 'a') {
      if (!data.attrs) data.attrs = {}

      data.attrs.href = props.to

      delete data.props.to
    }

    // Clean-up unecessary props
    delete data.props.type
    delete data.props.track

    // Append extra focusing <span> tag
    children = children.map((c: any): any => {
      return !c.tag && c.text !== undefined && c.text.trim()
        ? h('span', { attrs: { tabindex: '-1' } }, c.text)
        : c
    })

    return h(component, data, children)
  },
})
</script>

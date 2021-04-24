<script lang="ts">
import Vue, { PropOptions, CreateElement, VNode } from 'vue'

export default Vue.extend({
  name: 'ContentAtom',

  functional: true,

  props: {
    data: {
      type: Array,
      required: true,
    } as PropOptions<StaticContentData.INode[]>,
  },

  render: (h: CreateElement, { props }): VNode => {
    const toVNode = ({ tagName, attributes, children }: any): VNode => {
      const attrs = Array.isArray(attributes)
        ? Object.fromEntries(
            attributes.map(({ key, value }) => {
              return [key, value]
            })
          )
        : {}

      if (Array.isArray(children)) {
        children = children.map((c) => {
          if (c.type === 'text') {
            return (c as StaticContentData.INodeContent).content || ''
          }

          return toVNode(c)
        })
      }

      return h(tagName, { attrs }, children)
    }

    return toVNode(props.data[0])
  },
})
</script>

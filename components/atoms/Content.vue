<script lang="ts">
import Vue, { PropOptions, VNode, CreateElement } from 'vue'

interface IChild {
  tag: string
  attrs?: Record<string, string>
  children?: IChild[]
}

export default Vue.extend({
  name: 'ContentAtom',

  functional: true,

  props: {
    tag: {
      type: String,
      required: true,
    } as PropOptions<String>,
    attrs: {
      type: Object as Record<string, string>,
      default: () => ({}),
    } as PropOptions<Record<string, string>>,
    children: {
      type: [Array, String],
      default: () => [] as IChild[],
    } as PropOptions<IChild[] | String>,
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (h: CreateElement, { props, data, children }): VNode => {
    const jsonToVNode = ({ tag, attrs, children }) => {
      if (Array.isArray(children)) {
        children = children.map((c) => {
          return jsonToVNode(c)
        })
      }

      return h(tag, { attrs }, children)
    }

    return jsonToVNode(props)
  },
})
</script>

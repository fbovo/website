import { DirectiveOptions } from 'vue'

interface IOptions {
  [key: string]: any
}

const options: IOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
} as IOptions

function changeOptions(items: IOptions) {
  Object.keys(items).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(options, key))
      options[key] = items[key]
  })
}

const directive: DirectiveOptions = {
  bind(el, binding, vnode, oldVnode) {
    const { value, modifiers = {} } = binding
    const isObject = typeof value === 'object'

    if (isObject && Object.prototype.hasOwnProperty.call(value, 'options'))
      changeOptions(value.options)

    const callback = isObject ? value.callback : value
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = Boolean(
        entries.find((entry) => entry.isIntersecting)
      )

      if (!el._intersect || value.disabled) return

      // eslint-disable-next-line standard/no-callback-literal
      if (callback && !modifiers.enter) callback({ isIntersecting, entries })

      if (isIntersecting) {
        // eslint-disable-next-line standard/no-callback-literal
        if (modifiers.enter) callback({ isIntersecting, entries })
        if (el._intersect && value.once && this.unbind)
          this.unbind(el, binding, vnode, oldVnode)
      }
    }, options)

    el._intersect = { observer }
    observer.observe(el)
  },
  unbind(el) {
    if (!el._intersect) return

    el._intersect.observer.unobserve(el)
    delete el._intersect
  },
}

export default directive

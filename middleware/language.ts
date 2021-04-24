import { Context } from '@nuxt/types'

export default ({ route, store }: Context) => {
  const language: String =
    route.path && route.path.substring(0, 4) === '/it/' ? 'it' : 'en'

  // eslint-disable-next-line no-console
  console.log('Lang: ', language)

  store.commit('i18n/setCurrent', language)
}

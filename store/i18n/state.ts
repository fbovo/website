import { II18nState } from '.'

export default (): II18nState =>
  ({
    current: 'en',
    available: [
      {
        en: 'English',
        it: 'Italiano',
      },
    ],
  } as II18nState)

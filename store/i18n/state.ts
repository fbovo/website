import { ILocalState } from '.'

export default (): ILocalState =>
  ({
    current: 'en',
    available: [
      {
        en: 'English',
        it: 'Italiano',
      },
    ],
  } as ILocalState)

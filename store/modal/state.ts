import { ILocalState } from '.'

export default (): ILocalState =>
  ({
    main: {
      active: false,
      overlay: false,
    },
    'about#skills': {
      active: false,
      overlay: false,
    },
    'about#projects': {
      active: false,
      overlay: false,
    },
    'about#education': {
      active: false,
      overlay: false,
    },
  } as ILocalState)

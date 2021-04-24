import { IMenuState } from './'

export default (): IMenuState =>
  ({
    main: {
      active: false,
      modal: true,
      overlay: false,
    },
    about: {
      active: false,
      modal: true,
      overlay: false,
    },
    footer: {
      active: false,
      modal: false,
      overlay: false,
    },
  } as IMenuState)

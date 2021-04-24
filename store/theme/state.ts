import { ILocalState } from '.'

export default (): ILocalState =>
  ({
    current: 'defaultTheme',
    settings: {},
    animations: true,
    debug: false,
  } as ILocalState)

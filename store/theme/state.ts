import { IThemeState } from '.'

export default (): IThemeState =>
  ({
    current: 'defaultTheme',
    settings: {},
    animations: true,
    debug: false,
  } as IThemeState)

export interface IMenuItem {
  label: string
  anchor: string
  icon?: string
}

export interface IMenuState {
  [key: string]: {
    items: IMenuItem[]
    active: string
    modal: boolean
  }
}

export interface IMenuState {
  [key: string]: {
    active: string | boolean
    modal: boolean
    overlay: boolean
  }
}

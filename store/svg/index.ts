export interface ISvgNode {
  name: string
  type?: string
  value?: string
  attributes?: { [index: string]: string }
  children?: ISvgNode[]
}

export interface ISvgState {
  cache: { [index: string]: ISvgNode }
}

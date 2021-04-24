declare namespace StaticContentData {
  interface INodeAttribute {
    key: string
    value: string
  }

  interface INodeContent {
    type: string
    content: string
  }

  interface INode {
    type: string
    tagName: string
    attributes?: INodeAttribute[]
    children?: (INode | INodeContent)[]
  }
}

declare namespace StaticMenuData {
  interface INodeItem {
    label: string
    anchor: string
    icon?: string
  }

  interface INode {
    items: INodeItem[]
  }
}

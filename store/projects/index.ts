export interface IProject {
  name: string
  description: string
  image: {
    name: string
    // eslint-disable-next-line camelcase
    cdn_files: { cover: string }[]
  }[]
}

export default interface IProjectExtended extends IProject {}

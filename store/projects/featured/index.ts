import { IProject } from '../'

export interface IProjectFeatured extends IProject {}

export interface IProjectFeaturedState {
  items: IProjectFeatured[]
  error: boolean
  loaded: boolean
}

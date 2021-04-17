import { IProjectFeaturedState, IProjectFeatured } from './'

export default (): IProjectFeaturedState =>
  ({
    items: [] as IProjectFeatured[],
    error: false,
    loaded: false,
  } as IProjectFeaturedState)

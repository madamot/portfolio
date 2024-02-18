import { renderComponent } from '../../utils/generator'
import { BannerRecord } from '../../generated/graphql'

export const render = (data: BannerRecord): string => {
  return renderComponent(data)
}

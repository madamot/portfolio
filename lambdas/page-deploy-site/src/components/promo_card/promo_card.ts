import { renderComponent } from '../../utils/generator'
import { PromoCardRecord } from '../../generated/graphql'

export const render = (data: PromoCardRecord): string => {
  return renderComponent(data)
}

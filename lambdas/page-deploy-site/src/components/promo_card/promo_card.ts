import { loadComponents, renderComponent } from '../../utils/generator'
import { PromoCardRecord } from '../../generated/graphql'

export const render = (data: any): string => {
  data.id = data.id.replace(/-/g, '')
  data.renderedCards = loadComponents(data.cards)

  return renderComponent(data)
}

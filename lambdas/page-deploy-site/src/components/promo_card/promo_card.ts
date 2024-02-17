import { renderComponent } from '../../utils/generator'
import { PromoCardRecord } from '../../generated/graphql'

export const render = (data: PromoCardRecord): string => {
  data.id = data.id.replace('-', '')
  data.cards.forEach(card => {
    card.id = card.id.replace('-', '')
  })
  return renderComponent(data)
}

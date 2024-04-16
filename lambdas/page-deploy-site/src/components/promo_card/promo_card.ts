import { loadComponents, renderComponent } from '../../utils/generator'
import { PromoCardRecord } from '../../generated/graphql'

export interface PromoCardsBuildData extends PromoCardRecord {
  renderedCards: string
}

export const render = (data: PromoCardRecord): string => {
  const renderPromoCardsData: PromoCardsBuildData = {
    ...data,
    id: data.id.replace(/-/g, ''),
    renderedCards: loadComponents(data.cards.map(card => ({ ...card, style: data.style }))),
  }

  return renderComponent(renderPromoCardsData)
}

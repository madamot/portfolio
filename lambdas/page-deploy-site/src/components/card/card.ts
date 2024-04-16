import { renderComponent } from '../../utils/generator'
import { CardRecord } from '../../generated/graphql'

export interface CardBuildData extends CardRecord {
  style: string
}

export const render = (data: CardRecord): string => {
  const renderCardData: CardBuildData = {
    ...data,
    id: data.id.replace(/-/g, ''),
    style: 'standard',
  }

  return renderComponent(renderCardData)
}

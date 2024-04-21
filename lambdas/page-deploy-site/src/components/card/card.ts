import { renderComponent } from '../../utils/generator'
import { CardRecord } from '../../generated/graphql'

export interface CardStyleRecord extends CardRecord {
  style: string
}

export const render = (data: CardRecord): string => {
  data.id = data.id.replace(/-/g, '')

  return renderComponent(data)
}

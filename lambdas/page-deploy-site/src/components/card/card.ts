import { renderComponent } from '../../utils/generator'
import { CardRecord } from '../../generated/graphql'

interface CardStyled extends CardRecord {
  style: string
}

export const render = (data: CardStyled): string => {
  data.id = data.id.replace(/-/g, '')

  data.style = 'square'

  return renderComponent(data)
}

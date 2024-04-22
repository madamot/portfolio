import { renderComponent } from '../../utils/generator'
import { AccordionGroupRecord } from '../../generated/graphql'

export const render = (data: AccordionGroupRecord): string => {
  data.id = data.id.replace(/-/g, '')
  return renderComponent(data)
}

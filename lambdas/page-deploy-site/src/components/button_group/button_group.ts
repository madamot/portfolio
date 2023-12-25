import { ButtonGroupRecord } from '../../generated/graphql'
import { renderComponent } from '../../utils/generator'

export const render = (data: ButtonGroupRecord): string => {
  return renderComponent(data)
}

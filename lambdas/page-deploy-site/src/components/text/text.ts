import { renderComponent } from '../../utils/generator'
import { TextRecord } from '../../generated/graphql'

export const render = (data: TextRecord) => {
  return renderComponent(data)
}

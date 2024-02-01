import { renderComponent } from '../../utils/generator'
import { ImageRecord } from '../../generated/graphql'

export const render = (data: ImageRecord): string => {
  return renderComponent(data)
}

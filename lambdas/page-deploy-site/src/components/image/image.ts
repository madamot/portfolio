import { renderComponent } from '../../utils/generator'
import { ImageRecord } from '../../generated/graphql'

export const render = (data: ImageRecord): string => {
  data.id = data.id.replace(/-/g, '')

  return renderComponent(data)
}

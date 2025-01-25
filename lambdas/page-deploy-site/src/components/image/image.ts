import { renderComponent } from '../../utils/generator'
import { ImageRecord } from '../../generated/graphql'

export const render = (data: ImageRecord): string => {
  data.id = data.id.replace(/-/g, '')
  if (data.image) {
    data.image.id = data.id
  }

  return renderComponent(data)
}

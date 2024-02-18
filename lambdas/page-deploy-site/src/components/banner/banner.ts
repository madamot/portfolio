import { renderComponent } from '../../utils/generator'
import { BannerRecord } from '../../generated/graphql'

interface RenderBannerRecord extends BannerRecord {
  icon: string
}

export const render = (data: RenderBannerRecord): string => {
  switch (data.displayType) {
    case 'info':
      data.icon = '&#9432;'
      break

    case 'success':
      data.icon = '&#10003;'
      break

    case 'danger':
      data.icon = '&#10006;'
      break

    case 'warning':
      data.icon = '&#9888;'
      break

    default:
      data.icon = '&#9432;'
      break
  }

  return renderComponent(data)
}

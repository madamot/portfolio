import { renderComponent } from '../../utils/generator'
import { BannerRecord } from '../../generated/graphql'

export interface BannerBuildData extends BannerRecord {
  icon: string
}

export const render = (data: BannerRecord): string => {
  const getBannerIcon = (): string => {
    switch (data.displayType) {
      case 'info':
        return '&#9432;'

      case 'success':
        return '&#10003;'

      case 'danger':
        return '&#10006;'

      case 'warning':
        return '&#9888;'

      default:
        return '&#9432;'
    }
  }

  const renderBannerData: BannerBuildData = {
    ...data,
    icon: getBannerIcon(),
  }

  return renderComponent(renderBannerData)
}

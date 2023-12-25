import { renderComponent } from '../../utils/generator'
import { BillboardRecord } from '../../generated/graphql'

export const render = (data: BillboardRecord): string => {
  return renderComponent(data)
}

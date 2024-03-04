import { renderComponent } from '../../utils/generator'

export const render = (data: any): string => {
  data.id = data.id.replace('-', '')
  return renderComponent(data)
}

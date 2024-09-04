import { loadComponents, renderComponent } from '../../utils/generator'

export const render = (data: any) => {
  data.items.forEach((item: any) => {
    item.renderedComponents = loadComponents(item.content)
  })

  return renderComponent(data)
}

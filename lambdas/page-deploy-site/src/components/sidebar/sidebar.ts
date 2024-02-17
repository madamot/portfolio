import { loadComponents, renderComponent } from '../../utils/generator'

export const render = (data: any): string => {
  data.renderedComponents = loadComponents(data.content)

  return renderComponent({ ...data, _modelApiKey: 'sidebar' })
}

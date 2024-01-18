import { loadComponents, renderComponent } from '../../utils/generator'

export const render = (data: any): string => {
  console.log('sidebar render', data)

  data.renderedComponents = loadComponents(data)

  return renderComponent({ ...data, _modelApiKey: 'sidebar' })
}

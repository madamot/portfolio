const generator = require('../../utils/generator')

export const render = (data: any) => {
  if (!data)
    return generator.renderComponent({
      _modelApiKey: 'navigation',
    })

  return generator.renderComponent(data)
}

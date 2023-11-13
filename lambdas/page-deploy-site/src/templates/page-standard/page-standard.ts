const generator = require('../../utils/generator')
const components = require('../../utils/components')

export const render = async (data: any) => {
  data.renderedNavbar = generator.loadComponent('navigation').render(data.project.navigation)
  data.renderedComponents = await components.render(data)

  return generator.renderTemplate(data)
}

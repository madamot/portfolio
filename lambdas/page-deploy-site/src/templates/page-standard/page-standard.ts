const generator = require('../../utils/generator')

export const render = (data: any) => {
  data.renderedNavbar = generator.loadComponent('nav').render(data)

  return generator.renderTemplate(data)
}

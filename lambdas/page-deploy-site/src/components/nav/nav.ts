const generator = require('../../utils/generator')

export const render = (data: any) => {
  console.log('data at build time', data)

  return generator.renderComponent(data)
}

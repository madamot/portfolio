const generator = require('../../utils/generator')

export const render = async (data: any) => {
  console.log('data at build time', data)

  return generator.renderComponent(data)
}

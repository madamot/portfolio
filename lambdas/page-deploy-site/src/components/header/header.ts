import { HeaderRecord } from '../../generated/graphql'

const generator = require('../../utils/generator')

export const render = (data: HeaderRecord) => {
  return generator.renderComponent(data)
}

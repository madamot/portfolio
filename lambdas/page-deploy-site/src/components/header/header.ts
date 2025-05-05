import { HeaderRecord } from '../../generated/graphql'
import { loadComponent } from '../../utils/generator'

const generator = require('../../utils/generator')

export interface HeaderBuildData extends HeaderRecord {
  renderedImage?: string
}

export const render = (data: HeaderRecord) => {
  const headerData: HeaderBuildData = data

  if (data.image) {
    headerData['renderedImage'] = loadComponent(data.image._modelApiKey)?.render(data?.image)
  }

  return generator.renderComponent(headerData)
}

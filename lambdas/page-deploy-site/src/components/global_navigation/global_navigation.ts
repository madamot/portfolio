import { renderComponent } from '../../utils/generator'

import { ItemStatus } from '../../generated/graphql'

export const render = (): string => {
  return renderComponent({
    _modelApiKey: 'global_navigation',
    _createdAt: '',
    _isValid: false,
    _seoMetaTags: [],
    _status: ItemStatus.Published,
    _updatedAt: '',
    id: '',
  })
}

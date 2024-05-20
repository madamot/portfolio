import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as componentText } from './text'
import { ItemStatus, TextRecord } from '../../generated/graphql'

describe('component-text', () => {
  const textData: TextRecord = {
    id: 'wWo_l3VkQ2WlVe_iNaFSlA',
    _createdAt: '2023-11-12T23:07:18+00:00',
    _isValid: true,
    _modelApiKey: 'text',
    _seoMetaTags: [
      {
        tag: 'meta',
      },
      {
        tag: 'meta',
      },
      {
        tag: 'meta',
      },
      {
        tag: 'meta',
      },
    ],
    _status: ItemStatus.Published,
    _updatedAt: '2023-12-20T01:04:28+00:00',
    text: '<p>Welcome to my new site!</p>\n<p>You\'ll notice it looks a bit different. I\'m currently in the process of redeveloping it and using it as an excuse to learn some new tech. 🔨</p>\n<p>go visit <a href="http://www.tomhorne.co.uk" target="_blank" rel="noopener">www.tomhorne.co.uk</a> 😉</p>',
  }

  it('it renders the text body', () => {
    renderTestComponent(componentText, textData)

    expect(screen.getByTestId('textComponent')).toBeDefined()
    expect(screen.getByText('Welcome to my new site!')).toBeInTheDocument()
  })
})

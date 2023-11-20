import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

const componentText = require('./text')

describe('component-text', () => {
  const textData = {
    _modelApiKey: 'text',
    id: 'wWo_l3VkQ2WlVe_iNaFSlA',
    text: '<p>Welcome to my new site!</p>',
  }

  it('it renders the text body', () => {
    renderTestComponent(componentText, textData)

    expect(screen.getByTestId('textComponent')).toBeDefined()
    expect(screen.getByText('Welcome to my new site!')).toBeInTheDocument()
  })
})

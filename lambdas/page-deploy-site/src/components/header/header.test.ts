import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as HeaderComponent } from './header'

import { HeaderRecord, ItemStatus } from '../../generated/graphql'

describe('component-header', () => {
  const headerData: HeaderRecord = {
    id: 'RgN5RKFdQ-i8ZVDXMY1ejA',
    _createdAt: '2024-02-17T22:50:38+00:00',
    _isValid: true,
    _modelApiKey: 'header',
    _seoMetaTags: [
      { tag: 'title' },

      { tag: 'meta' },

      { tag: 'meta' },

      { tag: 'meta' },

      { tag: 'meta' },

      { tag: 'meta' },

      { tag: 'meta' },
    ],
    _status: ItemStatus.Updated,
    _updatedAt: '2024-02-18T12:58:41+00:00',
    title: 'A Mexican twist!',
    description:
      'Rather than add the teaspoon of sugar, you can stir in a small piece of chocolate (about the size of your thumbnail) when you add the beans. Any plain dark chocolate will do. Be careful not to add too much &ndash; you don&rsquo;t want to be able to identify the flavour of the chocolate.',
  }

  it('renders the header component', () => {
    renderTestComponent(HeaderComponent, headerData)

    expect(screen.getByTestId('headerComponent')).toBeDefined()
  })

  it('renders the title', () => {
    renderTestComponent(HeaderComponent, headerData)

    expect(screen.getByText('A Mexican twist!')).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderTestComponent(HeaderComponent, headerData)

    expect(
      screen.getByText(
        'Rather than add the teaspoon of sugar, you can stir in a small piece of chocolate (about the size of your thumbnail) when you add the beans. Any plain dark chocolate will do. Be careful not to add too much &ndash; you don&rsquo;t want to be able to identify the flavour of the chocolate.'
      )
    ).toBeInTheDocument()
  })

  it('does not renders the description if there is no data', () => {
    headerData.description = null

    renderTestComponent(HeaderComponent, headerData)

    expect(screen.queryByTestId('headerDescription')).toBeNull()
  })
})

import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as ListComponent } from './list'

import { ItemStatus, ListRecord } from '../../generated/graphql'

describe('component-list', () => {
  const listData: ListRecord = {
    id: 'BGN7n7LDQlaAij0SG2GTZw',
    _createdAt: '2023-12-23T16:28:37+00:00',
    _isValid: true,
    _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
    _status: ItemStatus.Published,
    _updatedAt: '2024-02-19T20:49:33+00:00',
    _modelApiKey: 'list',
    showListNumbers: true,
    items: [
      {
        id: 'BGN7n7LDQlaAij0SG2GTZw',
        _createdAt: '2023-12-23T16:28:37+00:00',
        _isValid: true,
        _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
        _status: ItemStatus.Published,
        _updatedAt: '2024-02-19T20:49:33+00:00',
        _modelApiKey: 'list',
        content: [
          {
            id: 'BGN7n7LDQlaAij0SG2GTZw',
            _createdAt: '2023-12-23T16:28:37+00:00',
            _isValid: true,
            _modelApiKey: 'text',
            _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
            _status: ItemStatus.Published,
            _updatedAt: '2024-02-19T20:49:33+00:00',

            text: '<p>Place the oil in a pan over medium heat. When warm, add the garlic and fry until softened but not brown.</p>',
          },
        ],
      },
    ],
  }

  it('renders the list component', () => {
    renderTestComponent(ListComponent, listData)

    expect(screen.getByTestId('listComponent')).toBeDefined()
  })
})

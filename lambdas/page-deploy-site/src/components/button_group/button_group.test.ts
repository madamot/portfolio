import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as componentButtonGroup } from './button_group'
import { ButtonGroupRecord, ItemStatus } from '../../generated/graphql'

describe('component-button_group', () => {
  const buttonGroupData: ButtonGroupRecord = {
    id: 'YtGp5su6R1WbvPNLT5_ejQ',
    _createdAt: '2023-12-24T22:41:01+00:00',
    _isValid: true,
    _modelApiKey: 'button_group',
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
    _updatedAt: '2023-12-24T22:41:01+00:00',
    buttons: [
      {
        _createdAt: '2023-12-24T22:41:01+00:00',
        _isValid: true,
        _modelApiKey: 'button',
        _seoMetaTags: [
          {
            tag: 'title',
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
        _updatedAt: '2023-12-24T22:41:01+00:00',
        id: 'PRHxrar1S9ysRgNYIcixKg',
        displayText: 'Github repo',
        role: 'primary',
        href: 'https://github.com/madamot/portfolio',
        target: '_blank',
        linkType: false,
        link: null,
      },
      {
        _createdAt: '2023-12-24T22:41:01+00:00',
        _isValid: true,
        _modelApiKey: 'button',
        _seoMetaTags: [
          {
            tag: 'title',
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
        _updatedAt: '2023-12-24T22:41:01+00:00',
        id: 'PRHxrar1S9ysRgNYIcixKg',
        displayText: 'Storybook',
        role: 'secondary',
        href: 'https://storybook.adamhorne.co.uk/?path=/docs/example-button--docs',
        target: '_self',
        linkType: false,
        link: null,
      },
    ],
  }

  it('it renders the button group', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByTestId('buttonGroupComponent')).toBeDefined()
  })

  it('it renders the correct amount of buttons', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getAllByRole('link').length).toEqual(2)
  })

  it('it renders a button with the correct url', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByRole('link', { name: /Github repo/ })).toHaveAttribute(
      'href',
      'https://github.com/madamot/portfolio'
    )
  })

  it('it renders a button with the correct target', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByRole('link', { name: /Github repo/ })).toHaveAttribute('target', '_blank')
  })

  it('it renders a button with the correct display text', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByText(/Github repo/)).toBeInTheDocument()
    expect(screen.getByText('Storybook')).toBeInTheDocument()
  })
})

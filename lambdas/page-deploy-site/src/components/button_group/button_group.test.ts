import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

const componentButtonGroup = require('./button_group')

describe('component-button_group', () => {
  const buttonGroupData = {
    _modelApiKey: 'button_group',
    id: 'NhAc7kiURSeZxa4XE5jvgA',
    buttons: [
      {
        id: 'SS89sFp4SmKp1virHu263g',
        displayText: 'Github repo',
        role: 'primary',
        href: 'https://github.com/madamot/portfolio',
        target: '_blank',
        linkType: false,
        link: null,
      },
      {
        id: 'eGkcD7McTFWD3_RROY5NjA',
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

    expect(screen.getByRole('link', { name: 'Github repo' })).toHaveAttribute(
      'href',
      'https://github.com/madamot/portfolio'
    )
  })

  it('it renders a button with the correct target', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByRole('link', { name: 'Github repo' })).toHaveAttribute('target', '_blank')
  })

  it('it renders a button with the correct display text', () => {
    renderTestComponent(componentButtonGroup, buttonGroupData)

    expect(screen.getByText('Github repo')).toBeInTheDocument()
    expect(screen.getByText('Storybook')).toBeInTheDocument()
  })
})

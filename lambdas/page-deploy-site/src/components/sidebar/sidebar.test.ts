import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as componentSidebar } from './sidebar'
import { SidebarRecord, ItemStatus } from '../../generated/graphql'

describe('component-sidebar', () => {
  const sidebarData: SidebarRecord = {
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
    title: 'Title test',
    sticky: true,
    content: [
      {
        id: 'bcPper14SyuUy9766zL5NA',
        _createdAt: '2024-02-02T16:27:35+00:00',
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
        _updatedAt: '2024-02-05T20:52:04+00:00',
        text: '<h2>Ingredients<span>&nbsp;</span></h2>\n<ul>\n  <li>6 (820g) Each Chicken breasts</li>\n  <li>1 Each Onion</li>\n  <li>10g Peeled ginger</li>\n  <li>&frac14; Teaspoon (H) Turmeric (Haldi)</li>\n  <li>2 Teaspoons Chilli powder</li>\n  <li>6 Teaspoons Paprika</li>\n  <li>2 Teaspoons Salt</li>\n  <li>95g Tomato puree</li>\n  <li>1 Each Can of coconut milk (not cream)</li>\n  <li>Egg noodles</li>\n  <li>Coriander leaves</li>\n  <li>Lemon juice</li>\n</ul>',
      },
    ],
  }

  it('renders the sidebar component', () => {
    renderTestComponent(componentSidebar, sidebarData)

    expect(screen.getByTestId('sidebarComponent')).toBeDefined()
  })

  it('renders the sidebar title if one passed', () => {
    renderTestComponent(componentSidebar, sidebarData)

    expect(screen.getByText('Title test')).toBeInTheDocument()
  })

  it('does not render the sidebar title if one is not passed', () => {
    sidebarData.title = null

    renderTestComponent(componentSidebar, sidebarData)

    expect(screen.queryByText('Title test')).not.toBeInTheDocument()
  })

  it('it renders the text component', () => {
    sidebarData.title = null

    renderTestComponent(componentSidebar, sidebarData)

    expect(screen.getByTestId('textComponent')).toBeDefined()
  })
})

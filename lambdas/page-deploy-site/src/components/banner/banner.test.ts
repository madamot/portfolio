import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as BannerComponent } from './banner'

import { ItemStatus } from '../../generated/graphql'

describe('component-banner', () => {
  const bannerData = {
    id: 'RgN5RKFdQ-i8ZVDXMY1ejA',
    _createdAt: '2024-02-17T22:50:38+00:00',
    _isValid: true,
    _modelApiKey: 'banner',
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
    text: '<p>Rather than add the teaspoon of sugar, you can stir in a small piece of chocolate (about the size of your thumbnail) when you add the beans. Any plain dark chocolate will do. Be careful not to add too much &ndash; you don&rsquo;t want to be able to identify the flavour of the chocolate.</p>',
    title: 'A Mexican twist! 🇲🇽',
    displayType: 'default',
    icon: 'info',
  }

  it('renders the banner component', () => {
    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('bannerComponent')).toBeDefined()
  })

  it('renders the title', () => {
    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByText('A Mexican twist! 🇲🇽')).toBeInTheDocument()
  })

  it('renders the text', () => {
    renderTestComponent(BannerComponent, bannerData)

    expect(
      screen.getByText(
        'Rather than add the teaspoon of sugar, you can stir in a small piece of chocolate (about the size of your thumbnail) when you add the beans. Any plain dark chocolate will do. Be careful not to add too much – you don’t want to be able to identify the flavour of the chocolate.'
      )
    ).toBeInTheDocument()
  })

  it('renders the appropriate "default" icon', () => {
    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('default-bannerIcon')).toBeDefined()
  })

  it('renders the appropriate "info" icon', () => {
    bannerData.displayType = 'info'

    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('info-bannerIcon')).toBeDefined()
  })

  it('renders the appropriate "success" icon', () => {
    bannerData.displayType = 'success'

    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('success-bannerIcon')).toBeDefined()
  })

  it('renders the appropriate "warning" icon', () => {
    bannerData.displayType = 'warning'

    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('warning-bannerIcon')).toBeDefined()
  })

  it('renders the appropriate "danger" icon', () => {
    bannerData.displayType = 'danger'

    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByTestId('danger-bannerIcon')).toBeDefined()
  })

  it('renders the default icon if no type is defined', () => {
    bannerData.displayType = ''

    renderTestComponent(BannerComponent, bannerData)

    expect(screen.getByText('ⓘ')).toBeInTheDocument()
  })
})

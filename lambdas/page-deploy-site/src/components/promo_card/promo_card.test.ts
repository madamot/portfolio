import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as PromoCardsComponent } from './promo_card'

import { PromoCardRecord, ItemStatus } from '../../generated/graphql'

describe('component-promo_card', () => {
  const PromoCardData: PromoCardRecord = {
    id: 'bkKE5_luR4ySZY1mmS-7mQ',
    _modelApiKey: 'promo_card',
    title: 'Recipes',
    description: '',
    linkType: false,
    href: 'https://www.google.com',
    cards: [
      {
        id: 'bNT5al0yRWO2JC4fwn6TgQ',
        title: 'Italian',
        excerpt: 'Some of my Italian favourites',
        image: {
          url: 'https://www.datocms-assets.com/106829/1703349343-img_4774.jpeg',
          _createdAt: '2023-12-24T21:26:38+00:00',
          _updatedAt: '2023-12-24T21:26:57+00:00',
          basename: 'flat',
          colors: [
            {
              alpha: 255,
              blue: 103,
              cssRgb: 'rgb(197 150 103)',
              green: 150,
              hex: '#C59667',
              red: 197,
            },
            {
              alpha: 255,
              blue: 184,
              cssRgb: 'rgb(184 197 184)',
              green: 197,
              hex: '#B8C5B8',
              red: 184,
            },
            {
              alpha: 255,
              blue: 106,
              cssRgb: 'rgb(149 140 106)',
              green: 140,
              hex: '#958C6A',
              red: 149,
            },
            {
              alpha: 255,
              blue: 78,
              cssRgb: 'rgb(24 45 78)',
              green: 45,
              hex: '#182D4E',
              red: 24,
            },
            {
              alpha: 255,
              blue: 175,
              cssRgb: 'rgb(229 204 175)',
              green: 204,
              hex: '#E5CCAF',
              red: 229,
            },
            {
              alpha: 255,
              blue: 50,
              cssRgb: 'rgb(79 71 50)',
              green: 71,
              hex: '#4F4732',
              red: 79,
            },
          ],
          customData: {},
          exifInfo: {},
          filename: 'flat.jpeg',
          format: 'jpeg',
          md5: '2f534407b621f36561dfa565558ee308',
          mimeType: 'image/jpeg',
          size: 355333,
          smartTags: [
            'land',
            'nature',
            'outdoors',
            'sea',
            'water',
            'shoreline',
            'coast',
            'city',
            'island',
            'building',
          ],
          tags: [],
          id: 'WxaDO1OTQxyeGCzKfJLTvQ',
        },
        linkType: false,
        href: 'https://www.bing.com',
        _createdAt: '2023-12-27T19:13:20+00:00',
        _isValid: true,
        _modelApiKey: 'card',
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
        _updatedAt: '2023-12-27T19:13:20+00:00',
      },
      {
        id: 'e9EHaunbTsyXp_6r0xEXCg',
        title: 'English',
        excerpt: 'Hearty and traditional',
        image: {
          url: 'https://www.datocms-assets.com/106829/1703337676-img_6288.jpeg',
          _createdAt: '2023-12-24T21:26:38+00:00',
          _updatedAt: '2023-12-24T21:26:57+00:00',
          basename: 'flat',
          colors: [
            {
              alpha: 255,
              blue: 103,
              cssRgb: 'rgb(197 150 103)',
              green: 150,
              hex: '#C59667',
              red: 197,
            },
            {
              alpha: 255,
              blue: 184,
              cssRgb: 'rgb(184 197 184)',
              green: 197,
              hex: '#B8C5B8',
              red: 184,
            },
            {
              alpha: 255,
              blue: 106,
              cssRgb: 'rgb(149 140 106)',
              green: 140,
              hex: '#958C6A',
              red: 149,
            },
            {
              alpha: 255,
              blue: 78,
              cssRgb: 'rgb(24 45 78)',
              green: 45,
              hex: '#182D4E',
              red: 24,
            },
            {
              alpha: 255,
              blue: 175,
              cssRgb: 'rgb(229 204 175)',
              green: 204,
              hex: '#E5CCAF',
              red: 229,
            },
            {
              alpha: 255,
              blue: 50,
              cssRgb: 'rgb(79 71 50)',
              green: 71,
              hex: '#4F4732',
              red: 79,
            },
          ],
          customData: {},
          exifInfo: {},
          filename: 'flat.jpeg',
          format: 'jpeg',
          md5: '2f534407b621f36561dfa565558ee308',
          mimeType: 'image/jpeg',
          size: 355333,
          smartTags: [
            'land',
            'nature',
            'outdoors',
            'sea',
            'water',
            'shoreline',
            'coast',
            'city',
            'island',
            'building',
          ],
          tags: [],
          id: 'WxaDO1OTQxyeGCzKfJLTvQ',
        },
        linkType: false,
        href: 'https://www.askjeeves.com',
        _createdAt: '2023-12-27T19:13:20+00:00',
        _isValid: true,
        _modelApiKey: 'card',
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
        _updatedAt: '2023-12-27T19:13:20+00:00',
      },
    ],
    _createdAt: '2023-12-27T19:13:20+00:00',
    _isValid: true,
    _seoMetaTags: [
      { tag: 'title' },
      { tag: 'meta' },
      { tag: 'meta' },
      { tag: 'meta' },
      { tag: 'meta' },
      { tag: 'meta' },
      { tag: 'meta' },
    ],
    _status: ItemStatus.Published,
    _updatedAt: '2024-01-04T22:17:27+00:00',
  }

  it('renders the promo cards component', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(screen.getByTestId('promoCardComponent')).toBeDefined()
  })

  it('renders the promo cards title', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(screen.getByText('Recipes')).toBeInTheDocument()
  })

  it('renders the promo cards group link', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(screen.getByRole('link', { name: 'Recipes' })).toHaveAttribute(
      'href',
      'https://www.google.com'
    )
  })

  it('renders the correct number of cards', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(screen.queryAllByTestId('promoCard')).toHaveLength(2)
  })

  it('renders a card with the correct title and description', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(screen.getByText('Italian')).toBeInTheDocument()
    expect(screen.getByText('Some of my Italian favourites')).toBeInTheDocument()
  })

  it('renders a card with the correct link', () => {
    renderTestComponent(PromoCardsComponent, PromoCardData)

    expect(
      screen.getByRole('link', { name: 'Italian Some of my Italian favourites' })
    ).toHaveAttribute('href', 'https://www.bing.com')
  })
})

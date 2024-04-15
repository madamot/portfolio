import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { renderTestComponent } from '../../utils/renderTestComponent'

import { render as AccordionGroupComponent } from './accordion_group'

import { AccordionGroupRecord, AccordionRecord, ItemStatus } from '../../generated/graphql'

describe('component-banner', () => {
  const accordions: AccordionRecord[] = [
    {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      summary: 'Step 1',
      content:
        '<p>Prepare your vegetables. Chop 1 large onion into small dice, about 5mm square. The easiest way to do this is to cut the onion in half from root to tip, peel it and slice each half into thick matchsticks lengthways, not quite cutting all the way to the root end so they are still held together. Slice across the matchsticks into neat dice.</p>',
    },
    {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      summary: 'Step 2',
      content:
        '<p>Cut 1 red pepper in half lengthways, remove stalk and wash the seeds away, then chop. Peel and finely chop 2 garlic cloves.</p>',
    },
    {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      summary: 'Step 3',
      content:
        '<p>Start cooking. Put your pan on the hob over a medium heat. Add 1 tbsp oil and leave it for 1-2 minutes until hot (a little longer for an electric hob).</p>',
    },
    {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      summary: 'Step 4',
      content:
        '<p>Add the onion and cook, stirring fairly frequently, for about 5 minutes, or until the onion is soft, squidgy and slightly translucent.</p>',
    },
  ]

  const accordionGroupData: AccordionGroupRecord = {
    id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
    _createdAt: '2024-03-04T17:18:19+00:00',
    _isValid: true,
    _modelApiKey: 'accordion_group',
    _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
    _status: ItemStatus.Published,
    _updatedAt: '2024-03-04T17:18:19+00:00',
    displayAllAsOpen: false,
    openInitial: false,
    accordions,
  }

  it('renders the accordions component', () => {
    renderTestComponent(AccordionGroupComponent, accordionGroupData)

    expect(screen.getByTestId('accordionGroupComponent')).toBeDefined()
  })

  it('renders the control buttons', () => {
    renderTestComponent(AccordionGroupComponent, accordionGroupData)

    expect(screen.getAllByRole('button').length).toEqual(2)
    expect(screen.getByRole('button', { name: 'Open all' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close all' })).toBeInTheDocument()
  })

  it('renders all the accordion items', async () => {
    renderTestComponent(AccordionGroupComponent, accordionGroupData)

    expect(await screen.getAllByTestId('accordionComponent').length).toEqual(4)
  })

  it('renders the accordion closed so you cannot see the content and just the title', () => {
    const accordionGroupData: AccordionGroupRecord = {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      displayAllAsOpen: false,
      openInitial: false,
      accordions: [
        {
          id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
          _createdAt: '2024-03-04T17:18:19+00:00',
          _isValid: true,
          _modelApiKey: 'accordion_group',
          _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
          _status: ItemStatus.Published,
          _updatedAt: '2024-03-04T17:18:19+00:00',
          summary: 'Step 1',
          content: '<p>You cannot see me.</p>',
        },
      ],
    }

    renderTestComponent(AccordionGroupComponent, accordionGroupData)

    expect(screen.getAllByTestId('accordionComponent').length).toEqual(1)
    expect(screen.getByText('You cannot see me.')).not.toBeVisible()
    expect(screen.getByText('Step 1')).toBeInTheDocument()
  })

  it('renders the accordion content if you click it', async () => {
    const accordionGroupData: AccordionGroupRecord = {
      id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
      _createdAt: '2024-03-04T17:18:19+00:00',
      _isValid: true,
      _modelApiKey: 'accordion_group',
      _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
      _status: ItemStatus.Published,
      _updatedAt: '2024-03-04T17:18:19+00:00',
      displayAllAsOpen: false,
      openInitial: false,
      accordions: [
        {
          id: 'TIrnGwj3Ry-7DqpNuHPb0gwedew',
          _createdAt: '2024-03-04T17:18:19+00:00',
          _isValid: true,
          _modelApiKey: 'accordion_group',
          _seoMetaTags: [{ tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }, { tag: 'meta' }],
          _status: ItemStatus.Published,
          _updatedAt: '2024-03-04T17:18:19+00:00',
          summary: 'Step 1',
          content: '<p>You cannot see me.</p>',
        },
      ],
    }

    renderTestComponent(AccordionGroupComponent, accordionGroupData)

    expect(screen.getByText('You cannot see me.')).not.toBeVisible()
    await userEvent.click(screen.getByText('Step 1'))
    expect(screen.getByText('You cannot see me.')).toBeVisible()
  })
})

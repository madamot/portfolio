import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import '@testing-library/jest-dom/vitest'

import All from './All'
import { MemoryRouter } from 'react-router-dom'
import { GetAllRecipesDocument, GetAllRecipesQuery } from '../../generated/graphql'

describe('<All />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  // Arrange
  const allRecipesMocks: MockedResponse<GetAllRecipesQuery>[] = [
    {
      request: {
        query: GetAllRecipesDocument,
        variables: {},
      },
      result: {
        data: {
          page: {
            search: [],
          },
        },
      },
    },
  ]

  const apolloMocks = [...allRecipesMocks]

  it('should render the all page', () => {
    // Act
    render(
      <MockedProvider mocks={apolloMocks}>
        <MemoryRouter>
          <All />
        </MemoryRouter>
      </MockedProvider>
    )

    // Assert
    expect(screen.getByText('All Recipes')).toBeInTheDocument()
  })
})

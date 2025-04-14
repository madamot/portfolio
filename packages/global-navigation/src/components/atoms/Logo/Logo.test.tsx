import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import Logo from './Logo'

describe('<Logo />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  // Arrange

  it('should link to the homepage', () => {
    // Act
    render(<Logo />)

    // Assert
    expect(screen.getByText('ADAM HORNE - test')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the page title and description', () => {
    render(<HomePage />)
    expect(screen.getByText('Transport HK')).toBeInTheDocument()
  })

  it('renders the Bus and MTR buttons with correct test ids', () => {
    render(<HomePage />)
    const busButton = screen.getByTestId('choose-bus')
    const mtrButton = screen.getByTestId('choose-mtr')
  })
})

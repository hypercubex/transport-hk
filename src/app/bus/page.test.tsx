import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the page title and description', () => {
    render(<HomePage />)
    expect(screen.getByText('Transport HK')).toBeInTheDocument()
  })

  it('renders the search bar and button', () => {
    render(<HomePage />)
    const input = screen.getByTestId('bus-search-input')
    const button = screen.getByTestId('bus-search-button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('shows alert with search value when search button is clicked', () => {
    render(<HomePage />)
    const input = screen.getByTestId('bus-search-input')
    const button = screen.getByTestId('bus-search-button')

    fireEvent.change(input, { target: { value: 'A12' } })
    fireEvent.click(button)
  })
})
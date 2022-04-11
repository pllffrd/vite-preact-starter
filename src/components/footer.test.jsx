import {h} from 'preact'
import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/preact'
import {Footer} from './footer.jsx'

describe('footer text is shown', () => {
  it('shows the made by text', () => {
    render(<Footer />)
    expect(screen.getByText('Preact + Vite!')).toBeInTheDocument()
  })
})

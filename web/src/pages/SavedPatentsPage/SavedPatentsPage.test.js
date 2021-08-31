import { render } from '@redwoodjs/testing'

import SavedPatentsPage from './SavedPatentsPage'

describe('SavedPatentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SavedPatentsPage />)
    }).not.toThrow()
  })
})

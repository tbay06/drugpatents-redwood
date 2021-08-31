import { render } from '@redwoodjs/testing'

import DrugPatentsPage from './DrugPatentsPage'

describe('DrugPatentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrugPatentsPage />)
    }).not.toThrow()
  })
})

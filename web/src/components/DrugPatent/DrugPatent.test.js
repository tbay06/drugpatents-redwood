import { render } from '@redwoodjs/testing'

import DrugPatent from './DrugPatent'

describe('DrugPatent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrugPatent />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing'

import SaveButton from './SaveButton'

describe('SaveButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SaveButton />)
    }).not.toThrow()
  })
})

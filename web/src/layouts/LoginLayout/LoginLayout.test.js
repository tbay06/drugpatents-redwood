import { render } from '@redwoodjs/testing'

import LoginLayout from './LoginLayout'

describe('LoginLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginLayout />)
    }).not.toThrow()
  })
})

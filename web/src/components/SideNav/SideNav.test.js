import { render } from '@redwoodjs/testing'

import SideNav from './SideNav'

describe('SideNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideNav />)
    }).not.toThrow()
  })
})

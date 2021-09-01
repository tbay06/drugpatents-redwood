import { render } from '@redwoodjs/testing'

import PatentsPerCompany from './PatentsPerCompany'

describe('PatentsPerCompany', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatentsPerCompany />)
    }).not.toThrow()
  })
})

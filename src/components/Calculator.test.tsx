import { render } from '@testing-library/react'
import { Calculator } from './Calculator'

test('snapshot test', () => {
  const { asFragment } = render(<Calculator />)
  expect(asFragment()).toMatchSnapshot()
})

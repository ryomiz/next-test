import { cleanup, render, screen } from '@testing-library/react'
import { Calculator } from './Calculator'

describe('Calculator Test', () => {
  afterEach(() => {
    cleanup()
  })

  // スナップショットテスト
  test('render', () => {
    const { asFragment } = render(<Calculator />)
    expect(asFragment()).toMatchSnapshot()
  })
})

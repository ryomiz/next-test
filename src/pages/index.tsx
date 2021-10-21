import { css } from '@emotion/react'

import type { NextPage } from 'next'

import { Calculator } from '@/components/Calculator'

const HomePage: NextPage = () => {
  return (
    <div css={container}>
      <div css={inner}>
        <Calculator />
      </div>
    </div>
  )
}

export default HomePage

const container = css`
  position: relative;
  height: 100vh;
`

const inner = css`
  position: absolute;
  width: 50%;
  height: 50%;
  inset: 25%;
`

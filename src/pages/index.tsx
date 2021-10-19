import { css } from '@emotion/react'

import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 css={hello}>Hello World</h1>
    </div>
  )
}

export default HomePage

const hello = css`
  font-size: 2rem;
  text-align: center;
`

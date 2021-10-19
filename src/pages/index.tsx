import { useCalcurator } from '@/hooks/useCalculator'
import { css } from '@emotion/react'
import type { NextPage } from 'next'

type Operators = '+' | '-' | '*' | '/'

const arr = [...Array(9)].map((_, index: number) => index + 1)
const symbols: Operators[] = ['+', '-', '*', '/']

const HomePage: NextPage = () => {
  const {
    firstVal,
    secondVal,
    result,
    operator,
    setValue,
    handleOperator,
    calculate,
    clear,
  } = useCalcurator()

  return (
    <div css={container}>
      <div css={inner}>
        <div css={display}>
          {result ? result : `${firstVal} ${operator} ${secondVal}`}
        </div>
        <div css={flex}>
          <div css={grid}>
            {arr.map((number) => (
              <button
                key={number}
                css={button}
                onClick={() => setValue(number)}
              >
                {number}
              </button>
            ))}
            <button css={button} onClick={clear}>
              C
            </button>

            <button css={button} onClick={() => setValue(0)}>
              0
            </button>
            <button css={button} onClick={calculate}>
              =
            </button>
          </div>
          <div css={column}>
            {symbols.map((sym) => (
              <button
                key={sym}
                css={button}
                onClick={() => handleOperator(sym)}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>
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

const display = css`
  padding: 0 0.2em;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 5rem;
  text-align: right;
`

const flex = css`
  display: flex;
  gap: 20px;
`

const grid = css`
  display: grid;
  height: 200px;
  flex: 3;
  justify-content: end;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`

const button = css`
  height: 80px;
  background-color: #ccc;
  font-size: 3rem;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16) inset;
  }
`

const column = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`

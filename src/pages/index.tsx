import { css } from '@emotion/react'
import { useState } from 'react'
import type { NextPage } from 'next'

type Operators = '+' | '-' | '*' | '/'

const arr = [...Array(9)].map((_, index: number) => index + 1)
const symbols: Operators[] = ['+', '-', '*', '/']

const HomePage: NextPage = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [result, setResult] = useState<number | null>(0)

  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [oprt, setOprt] = useState<Operators | ''>('')

  const setValue = (number: number) => {
    if (isFirst) {
      const newValue = first * 10 + number
      setFirst(newValue)
    } else {
      const newValue = second * 10 + number
      setSecond(newValue)
    }
  }

  const selectOperator = (sym: Operators) => {
    setOprt(sym)
    setIsFirst(false)
  }

  const calculate = () => {
    if (oprt === '+') {
      setResult(first + second)
    } else if (oprt === '-') {
      setResult(first - second)
    } else if (oprt === '*') {
      setResult(first * second)
    } else if (oprt === '/') {
      setResult(first / second)
    }
  }

  const clear = () => {
    setResult(null)
    setIsFirst(true)
    setFirst(0)
    setSecond(0)
    setOprt('')
  }
  return (
    <div css={container}>
      <div css={inner}>
        <div css={display}>
          {result ? result : `${first} ${oprt} ${second && second}`}
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
          <div css={operator}>
            {symbols.map((sym) => (
              <button
                key={sym}
                css={button}
                onClick={() => selectOperator(sym)}
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

const operator = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`

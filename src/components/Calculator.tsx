import { css } from '@emotion/react'

import { CalculatorButton } from './CalculatorButton'

import type { Operators } from 'src/types'

import { useCalcurator } from '@/hooks/useCalculator'

const arr = [...Array(9)].map((_, index: number) => index + 1)
const symbols: Operators[] = ['+', '-', '*', '/']

export const Calculator: React.VFC = () => {
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
    <div>
      <div css={display}>
        {result ? result : `${firstVal} ${operator} ${secondVal}`}
      </div>
      <div css={flex}>
        <div css={grid}>
          {arr.map((number) => (
            <CalculatorButton key={number} onClick={() => setValue(number)}>
              {number}
            </CalculatorButton>
          ))}
          <CalculatorButton onClick={clear}>C</CalculatorButton>
          <CalculatorButton onClick={() => setValue(0)}>0</CalculatorButton>
          <CalculatorButton onClick={calculate}>=</CalculatorButton>
        </div>
        <div css={column}>
          {symbols.map((sym) => (
            <CalculatorButton key={sym} onClick={() => handleOperator(sym)}>
              {sym}
            </CalculatorButton>
          ))}
        </div>
      </div>
    </div>
  )
}

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

const column = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`

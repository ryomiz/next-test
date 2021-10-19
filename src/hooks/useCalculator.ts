import { useState } from 'react'

type Operators = '+' | '-' | '*' | '/' | ''

type ReturnValue = {
  firstVal: number
  secondVal: number
  result: number
  operator: Operators
  setValue: (arg: number) => void
  handleOperator: (arg: Operators) => void
  calculate: () => void
  clear: () => void
}

export const useCalcurator = (): ReturnValue => {
  const [firstVal, setFirstVal] = useState<number>(0)
  const [secondVal, setSecondVal] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [operator, setOperator] = useState<Operators>('')

  const setValue = (number: number) => {
    if (!operator) {
      const newValue = firstVal * 10 + number
      setFirstVal(newValue)
    } else {
      const newValue = secondVal * 10 + number
      setSecondVal(newValue)
    }
  }

  const handleOperator = (opr: Operators) => setOperator(opr)

  const calculate = () => {
    if (operator === '+') {
      setResult(firstVal + secondVal)
    } else if (operator === '-') {
      setResult(firstVal - secondVal)
    } else if (operator === '*') {
      setResult(firstVal * secondVal)
    } else if (operator === '/') {
      setResult(firstVal / secondVal)
    }
  }

  const clear = () => {
    setResult(0)
    setFirstVal(0)
    setSecondVal(0)
    setOperator('')
  }

  return {
    firstVal,
    secondVal,
    result,
    operator,
    setValue,
    handleOperator,
    calculate,
    clear,
  }
}

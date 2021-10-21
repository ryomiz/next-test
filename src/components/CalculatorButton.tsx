import { css } from '@emotion/react'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const CalculatorButton: React.FC<Props> = (props) => {
  const { onClick, children } = props

  return (
    <button css={button} onClick={onClick}>
      {children}
    </button>
  )
}

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

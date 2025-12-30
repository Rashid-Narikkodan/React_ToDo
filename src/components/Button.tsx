import type { ButtonHTMLAttributes } from "react"

type Props={
  children: React.ReactNode
  type?:"button" | "submit" | "reset" | undefined,
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>,'type'>
const Button = ({type='button',children,...rest}:Props) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  )
}

export default Button
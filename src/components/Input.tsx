import type { InputHTMLAttributes } from "react"

type Props={
    value:string,
  onChange:(value:string)=>void
} & Omit<InputHTMLAttributes<HTMLInputElement>,'value'|'onChange'>
const Input = ({value,onChange, ...rest}:Props) => {
  return (
      <input {...rest} type="text" value={value} onChange={(e)=>onChange(e.target.value)}/>
  )
}

export default Input
import type { InputHTMLAttributes } from "react"

export type InputType={
    value:string,
  onChange:(value:string)=>void
} & Omit<InputHTMLAttributes<HTMLInputElement>,'value'|'onChange'>
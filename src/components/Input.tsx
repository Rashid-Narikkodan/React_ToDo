import type { InputType } from "../types/Input"
const Input = ({value,onChange, ...rest}:InputType) => {
  return (
      <input {...rest} type="text" value={value} onChange={(e)=>onChange(e.target.value)}/>
  )
}

export default Input
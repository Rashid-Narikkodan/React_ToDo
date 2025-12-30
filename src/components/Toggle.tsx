import type { CheckBoxProps } from "../types/CheckBoxProps"

const Toggle = ({...rest}:CheckBoxProps) => {
  return (
    <input type="checkbox" {...rest} />
  )
}

export default Toggle
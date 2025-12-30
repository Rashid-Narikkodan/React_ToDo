import type { CheckBoxProps } from "../types/CheckBoxProps"

const CheckBox = ({...rest}:CheckBoxProps) => {
  return (
    <input type="checkbox" {...rest} />
  )
}

export default CheckBox
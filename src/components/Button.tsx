type Props={
  children: React.ReactNode
  type?:"button" | "submit" | "reset" | undefined,
}
const Button = ({type='button',children}:Props) => {
  return (
    <button type={type} className="bg-gray-600">
      {children}
    </button>
  )
}

export default Button



const Button = (props) => {
  const { children } = props

  return (
    <button
      className="bg-[#4A69E2] text-[white] px-[32px] py-[15px] rounded-[8px] uppercase">
      {children}
    </button>
  )
}

export default Button
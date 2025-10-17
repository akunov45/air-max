


const Button = (props) => {
    const {children} = props

  return (
    <button className="bg-[#4A69E2] text-[white] py-[15px] px-[32px] rounded-[8px] font-[500] text-[14px] uppercase;}">
        {children}</button>
  )
}

export default Button
<<<<<<< HEAD



const Button = (props) => {
    const {children} = props

  return (
    <button className="bg-[#4A69E2] text-[white] py-[15px] px-[32px] rounded-[8px] font-[500] text-[14px] uppercase;}">
        {children}</button>
=======
const Button = (props) => {
  const { children } = props

  return (
    <button
      className="bg-[#4A69E2] text-[white] px-[32px] py-[15px] rounded-[8px] uppercase">
      {children}
    </button>
>>>>>>> 620e0691aa953959a96cf3ae1c524c44c6db9522
  )
}

export default Button
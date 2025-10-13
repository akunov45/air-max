import Hero from "../Hero/Hero"


const HomePage = () => {
  return (
    <div className="app-container pt-[24px]">
      <h1 className='text-[223px] uppercase font-[700]'>
        Do it
        <span className="text [rgba(74, 105, 226, 1)]">right</span></h1>
        <Hero/>
    </div>
  )
}

export default HomePage
import HeroImg from "/hero.png"

const Hero = () => {
  return (
    <div style={{
      backgroundImage: `url(${HeroImg})`,
      height: "750px"
    }} 
    className={`bg-cover bg-no-repeat`}>
        <h2>NIKE AIR MAX</h2>
        <p>Nike introducing the new air max for everyone's comfort</p>
        <button>Shop now</button>
    </div>
  )
}

export default Hero
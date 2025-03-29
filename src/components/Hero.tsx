


const Hero = () => {
  return (
    <section
      id="hero"
    >
      <div
        className="relative overflow-hidden w-[80vw] max-w-[700px] h-[300px] mx-auto mt-5 bg-color-cyberBlack rounded-lg shadow-tv flex items-center"
      >
        <div className="tv-noise"></div>
        <h1
          className="text-balance text-md px-10 md:p-20 md:text-xl lg:text-2xl text-color-neonCyan text-center text-shadow animate-tvGlitch leading-10 md:leading-loose lg:leading-loose tracking-wider"
        >
          I'm Mehran Shahani, a <span className="text-nowrap">front-end</span> developer passionate about crafting futuristic digital experiences.
        </h1>
      </div>
    </section>
  )
}

export default Hero
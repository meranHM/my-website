

const RetroVersion = () => {
    return (
      <div className="bg-white text-black min-h-screen font-serif px-4 py-8 max-w-3xl mx-auto">
        <header className="text-center border-b border-black pb-4 mb-6">
          <h1 className="text-4xl font-bold uppercase">The Mehran Times</h1>
          <p className="text-sm mt-2">Est. 2025 | Web Developer Edition</p>
        </header>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">About the Developer</h2>
          <p className="leading-relaxed text-justify">
            Mehran Shahani is a web developer passionate about crafting immersive digital
            experiences. With a flair for turning ideas into code, he specializes in modern
            front-end technologies like React, Redux, Next.js, TypeScript, and Tailwind CSS. In this
            newspaper-style page, we honor the simplicity of the early web.
          </p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">Recent Projects</h2>
          <ul className="list-disc pl-5">
            <li><strong>FocusFrame</strong> - A portfolio template for photographers and visual creatives.</li>
            <li><strong>Terminal Portfolio</strong> - A cyberpunk-themed interactive developer portfolio.</li>
            <li><strong>Coming Soon</strong> - More creative templates and surprises in the pipeline.</li>
          </ul>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">Contact</h2>
          <p>
            Have a project in mind? You can reach Mehran via
            <a href="mailto:mehranshahani6@gmail.com" className="underline ml-1">mehranshahani6@gmail.com</a>
          </p>
        </section>
  
        <footer className="text-center border-t border-black pt-4 mt-10 text-sm">
          <p>&copy; 2025 The Mehran Times. All Rights Reserved.</p>
          <p className="mt-2">Return to normal mode: <span className="underline cursor-pointer">exit retro</span></p>
        </footer>
      </div>
    )
  }
  
  export default RetroVersion
  
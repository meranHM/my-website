import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import MatrixRain from "../components/design/MatrixRain"

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [command, setCommand] = useState("")
  const [easterEgg, setEasterEgg] = useState(false)

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessageSent(true)
    setTimeout(() => setMessageSent(false), 3000)
  }

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.toLocaleLowerCase() === "contact-me") {
      setEasterEgg(true)
    }
  }

  return (
    <div
      className=" relative min-h-screen bg-[#06080a] text-green-400 flex flex-col items-center justify-center p-8 z-50"
    >
      <div className="absolute left-5 top-0 h-full w-10 flex flex-col">
        <MatrixRain />
      </div>

      <motion.div
        className="text-lg text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        📡 SIGNAL ONLINE – Ready to establish communication.
      </motion.div>

      <motion.form
        className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 w-full max-w-md z-[50]"
        onSubmit={handleSendMessage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <label className="block text-sm mb-2">Name:</label>
        <input 
          className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
          type="text" 
          required 
        />

        <label className="block text-sm mb-2">Email:</label>
        <input 
          className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
          type="email"
          required
        />

        <label className="block text-sm mb-2">Message:</label>
        <textarea className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4" rows={4} required></textarea>

        <button
          className="w-full bg-green-600 hover:bg-green-400 text-black font-bold py-2 rounded"
          type="submit"
        >
          Encrypt & Send
        </button>
      </motion.form>

      {messageSent && <div className="mt-4 text-green-300">✅ Transmission Sent Successfully.</div>}

      <div className="flex space-x-6 mt-8">
        {[{icon: FaLinkedin, link: "#"}, {icon: FaGithub, link: "#"}, {icon: FaEnvelope, link: "#"}].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="text-green-400 text-3xl hover:text-green-300 transition duration-200 z-[50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 * index }}
          >
            <item.icon />
          </motion.a>
        ))}
      </div>

      <div
        className="mt-8 bg-gray-900 p-4 rounded-lg shadow-lg border border-green-500 w-full max-w-md z-[50]"
      >
        <label className="block text-sm mb-2">Enter Command:</label>
        <input 
          type="text" 
          className="w-full p-2 bg-black text-green-400 border border-green-500 rounded"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleTerminalCommand}
        />
      </div>

      {easterEgg && (
        <motion.div
          className="mt-4 text-green-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🔓 Secret Contact Unlocked: hacker@cybermail.com
        </motion.div>
      )}

      <div className="absolute right-5 top-0 h-full w-10 flex flex-col">
        <MatrixRain />
      </div>
    </div>
  )
}

export default Contact
import { useEffect, useState } from "react"

const Footer = () => {
  const [uptime, setUptime] = useState(0)
  const currentYear = new Date().getFullYear()
  const fullDate = new Date().toLocaleDateString("en-GB")

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    

    <footer
      className="py-10 container flex flex-col sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
    >
      <p>-----------------------------------</p>
      <p>SYSTEM STATUS: <span className="status">ONLINE ✅</span></p>
      <p>LAST UPDATE: <span className="status">{fullDate}</span></p>
      <p>UPTIME: <span className="status">{uptime} SECONDS</span></p>
      <p>SECURITY LEVEL: <span className="status">ENCRYPTED 🔒</span></p>
      <p>-----------------------------------</p>
      <p>&copy; {currentYear} Mehran Shahani | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
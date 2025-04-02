import { useMemo } from "react"


const getRandomStyles = () => ({
    fontSize: `${Math.floor(Math.random() * 20) + 14}px`,
    opacity: Math.random() * 0.2 + 0.1,
    textShadow: Math.random() > 0.5 ? "0px 0px 6px rgba(0, 255, 0, 0.5)" : "none",
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
})

const BinaryBackground = () => {
    const binaryArray =  useMemo(() => 
        Array.from({ length: 200 }, (_, i) => ({
        id: i,
        value: Math.random() > 0.5 ? "0" : "1",
        delay: Math.random() * 3,
        style: getRandomStyles(),
        animationClass: Math.random() > 0.3 ? "animate-starEffect" : ""
    }))
,[])

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {binaryArray.map((item) => (
                <span
                    key={item.id}
                    className={`absolute text-green-400 text-lg opacity-75 ${item.animationClass}`}
                    style={item.style}
                >
                    {item.value}
                </span>)
            )}

        </div>
    )
  }

export default BinaryBackground  
import { useState } from "react"

export const Favcolor = () => {
    const [color, setColor] = useState("red");
  return (
    <>
        <h1>My favorite color is {color}!</h1>
        <button 
            type="button"
            onClick={() => setColor("blue")}
        >Blue</button>
        <button 
            type="button"
            onClick={() => setColor("red")}
        >Red</button>
    </>
  )
}

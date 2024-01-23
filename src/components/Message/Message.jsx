import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState("");

    const InputChange = () => {
      setMessage(event.target.value);
    }

  return (
    <>
      <hr />
      <p>Send en hilsen til {message}</p>
      <input 
        type="text"
        value={message}
        onChange={InputChange} 
      />
      {/* <input 
        type="text"
        value={message}
        onChange={() => setMessage(event.target.value)} 
      /> */}
    </>
  )
}

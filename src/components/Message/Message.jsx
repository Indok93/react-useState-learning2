import { useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const Message = () => {
    const [message, setMessage] = useState("");

    const InputChange = () => {
      setMessage(event.target.value);
    }

  return (
    <>
      <ContentWrapper title="Message">
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
      </ContentWrapper>
    </>
  )
}

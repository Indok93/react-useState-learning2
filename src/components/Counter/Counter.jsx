import { useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <ContentWrapper title="Counter">
        <p>Du har klikket på knappen {count} antal gange</p>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
        >Count</button>
      </ContentWrapper>
    </>
  )
}

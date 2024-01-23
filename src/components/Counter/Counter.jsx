import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <p>Du har klikket på knappen {count} antal gange</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >Count</button>
    </>
  )
}

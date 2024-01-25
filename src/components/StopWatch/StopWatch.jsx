import { useEffect, useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"

export const StopWatch = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;

        if (isRunning) {
            timerId = setTimeout(() => {
                setCount((prevCount) => prevCount +1);
            }, 1000);
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [isRunning, count]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setCount(0);
    };

  return (
    <ContentWrapper title="Stopwatch">
        <p>stopur: {count}</p>
        <button onClick={handleStart} disabled={isRunning}>
            Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
            Stop
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
    </ContentWrapper>
  )
}

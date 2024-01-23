import { Car } from "../../components/Car/Car"
import { Counter } from "../../components/Counter/Counter"
import { Favcolor } from "../../components/Favcolor/Favcolor"
import { Message } from "../../components/Message/Message"

export const Home = () => {
    return (
        <>
            <Favcolor />
            <Car />
            <Counter />
            <Message />
        </>
    )
}
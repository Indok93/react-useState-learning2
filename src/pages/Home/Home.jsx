import { Car } from "../../components/Car/Car"
import { Counter } from "../../components/Counter/Counter"
import { Favcolor } from "../../components/Favcolor/Favcolor"

export const Home = () => {
    return (
        <>
            <Favcolor />
            <Car />
            <Counter />
        </>
    )
}
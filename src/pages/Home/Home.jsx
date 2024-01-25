
import { Header } from "../../components/Header/Header"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { Footer } from "../../components/Footer/Footer"
import { Counter } from "../../components/Counter/Counter"
import { Message } from "../../components/Message/Message"

export const Home = () => {
    return (
        <>
            <Header />

            <ContentWrapper title="Homepage">
                <Counter />
                <Message />
            </ContentWrapper>

            <Footer />
        </>
    )
}
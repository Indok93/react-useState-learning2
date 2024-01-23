
import { Header } from "../../components/Header/Header"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { Counter } from "../../components/Counter/Counter"
import { Message } from "../../components/Message/Message"
import { Footer } from "../../components/Footer/Footer"

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
import { useEffect, useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import axios from "axios"

export const Joke = () => {
    const [apiData, setApiData] = useState([])

    // Asynkron funktion til kald af API
    const getData = async () => {
        const endpoint = `https://official-joke-api.appspot.com/jokes/ten`;
        const result = await axios.get(endpoint);
        // console.log(result.data);
        setApiData(result.data);
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <ContentWrapper title="Joke">
        {apiData && apiData.map(array => {
            return (
                <li key={array.id}>
                    {array.setup}
                    <p>{array.punchline}</p>
                <hr /></li>
            )
        })}
    </ContentWrapper>
  )
}

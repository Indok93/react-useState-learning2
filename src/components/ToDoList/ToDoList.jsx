import { useState } from "react";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"


export const ToDoList = () => {
  const [data, setData] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    setData((prevData) => [...prevData, e.target.task.value]);
  }

  const handleDelete = (indexToRemove) => {
    setData((prevData) => prevData.filter((_, currentIndex) => currentIndex !== indexToRemove));
  };

  const handleDeleteAll = () => {
    setData([]); // empty to remove all tasks
  }

  return (
    <>
      <ContentWrapper title="ToDo List">
        <form onSubmit={handleSubmit}>
          <input type="text" id="task" />
          <button type="submit">Tilføj</button>
        </form>
        <div>
          <ol>
            {data && data.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => handleDelete(index)}>Fjern</button>
                </li>
              )
            })}
          </ol>
          {data.length > 1 && (
            <button onClick={handleDeleteAll}>Fjern Alle</button>
          )}
        </div>
      </ContentWrapper>
    </>
  )
}

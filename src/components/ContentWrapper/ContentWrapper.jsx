

export const ContentWrapper = ({title, children}) => {
  return (
    <main>
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </main>
  )
}

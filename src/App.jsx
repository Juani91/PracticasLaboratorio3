import ChristopherNolanFilms from "./components/cristophernolanfilms/CristopherNolanFilms"
import watchList from "./components/watchlist/Watchlist"

function App() {

  return (
    <>
      <div>
        <ChristopherNolanFilms films={watchList}/>
      </div>
    </>
  )
}

export default App;

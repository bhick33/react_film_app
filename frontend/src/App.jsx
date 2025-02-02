import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Ben's Film!", release_date: "29/12/1987"}}/>
    </>
  )
}

export default App

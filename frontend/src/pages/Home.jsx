import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1986"},
        {id: 3, title: "The Matrix", release_date: "1997"},
    ]
    
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for Movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
        <div className="movies-grid">
            {movies.map(
                (movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )
            }
        </div>
    </div>
}

export default Home
import { useEffect, useState } from 'react';
import './App.css'
import MovieCard  from './MovieCard';
import SearchIcon from './search.svg';

//e2b46922

const API_URL = 'http://www.omdbapi.com?apikey=e2b46922'
const movie1 = {
    
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }

const App =() => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    const[searchTerm, setSearchTerm] = useState('');


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return(
        <div className='app'>
            <h1>Movieland</h1>
        <div className='search'>
            <input
            placeholder='Search for movies'
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
        ></img>
        </div>
    

     {
     movies?.length > 0
       ? (
        <div className='container'>
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </div>
       ) :  ( 
        <div className='empty'>
            <h2>No movies found</h2>
        </div>
     )
     }

     </div>

     
)}
    export default App;
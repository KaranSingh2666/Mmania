
import Header from './components/Header'
import Movie from './components/Movie'
import { useState, useEffect } from "react"

// api key - b91b8f2d
// const base_url= http://www.omdbapi.com/?i=tt3896198&apikey=b91b8f2d;

function App() {
  const [movie,setMovie]= useState([]);
  const [searchTerm,setSearchTerm]= useState("");

  const moviesearch = async(title) =>{
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b91b8f2d&s=${title}`);
    let data = await response.json();
    setMovie(data.Search) ;
  }

useEffect(()=>{
  moviesearch("batman")
  
},[])
  

 
  return (
    <div className='bg-gray-900'>
      <Header searchterm={searchTerm} setsearchterm={setSearchTerm} moviesearch={moviesearch}/>
      {
    movie?.length > 0 ? (
      <div className='container mx-auto flex flex-row flex-wrap p-10 gap-14 justify-center items-center'>
      {movie.map((mov)=>(
          <Movie movie={mov} />
      )
      )}
      </div>)
    : (<div className=''>No movies found</div>)
  }
    </div>
  )
}
export default App;
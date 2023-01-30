import axios from '../axios';
import { useEffect, useState } from 'react';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ml-4">
      <h2 className="text-lg lg:text-2xl mt-2 ml-2 font-bold">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide px-2 py-4">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`max-h-[200px] ${
                isLargeRow && 'max-h-[350px]'
              } object-contain mr-4 w-full transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;

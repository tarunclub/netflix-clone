import { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchMovie();
  }, []);

  console.log(movie);

  return (
    <section
      className={`object-contain text-white relative h-[432px] lg:[480px] bg-no-repeat flex flex-col justify-between`}
      style={{
        backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
        )`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute w-full h-24 bg-gradient-to-t from-black to-transparent bottom-0 z-10" />
      <div className="space-y-4 ml-6 pt-32 lg:pt-24 h-[190px] mt-8">
        <h1 className="lg:text-5xl text-3xl font-bold truncate">
          {movie?.name}
        </h1>
        <div>
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="pt-4 font-semibold max-w-2xl truncate">
          ${movie?.overview}
        </p>
      </div>
    </section>
  );
}

export default Banner;

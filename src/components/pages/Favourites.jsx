import React from "react";
import { useSelector } from "react-redux";
import Movie from "../Movie";
const Favourites = () => {
  const movies = useSelector((state) => state.favourites);

  return (
    <div className=" px-10 font-semibold min-h-screen pt-11">
      <h1 className="text-center text-6xl py-5">Favourites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 place-center justify-items-center">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Favourites;

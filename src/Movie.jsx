import React from "react";

function Movie(props) {
  return (
    <div className="mx-auto">
      <div className="movie-sec bg-gray-700 text-white w-72 p-5 px-16 rounded-lg text-center mb-10">
        <img
          className="w-40 rounded-md mx-auto"
          src={props.poster}
          alt="poster"
        />
        <h1 className="text-xl">{props.title}</h1>
        <p className="text-xs text-gray-300">{props.year}</p>
        <a href={props.link}>
          <button className="mt-5 bg-red-500 w-40 rounded-md py-2 font-bold text-xl hover:bg-red-700">
            View Movie
          </button>
        </a>
      </div>
    </div>
  );
}

export default Movie;

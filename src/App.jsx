import { useState } from "react";
import Movie from "./Movie";
import { Data } from "./Data";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <h1 className="top text-white text-center py-10 text-3xl font-bold">
          Top SiFi Movies
        </h1>
        <div className="body bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Data.map((movie) => (
            <Movie
              title={movie.name}
              poster={movie.poster}
              link={movie.link}
              year={movie.year}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

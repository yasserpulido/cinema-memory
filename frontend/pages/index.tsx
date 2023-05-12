import { useContext } from "react";

import { MovieProvider } from "@/providers";

export default function Home() {
  const context = useContext<MovieProvider.ContextType>(MovieProvider.Context);

  if (context.movies.length === 0) {
    return <div>No movies</div>;
  }

  return (
    <ul>
      {context.movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
  );
}

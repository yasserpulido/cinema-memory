import { ReactNode, createContext, useEffect, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Movie } from "@/types";
import { movieApi } from "@/apis";

const movieDefaultValues: Movie = {
  id: "",
  title: "",
  description: "",
  year: 0,
  rating: 0,
};

export type ContextType = {
  status: "idle" | "success" | "error";
  isLoading: boolean;
  movie: Movie | undefined;
  movies: Array<Movie>;
  save: (movie: Movie) => void;
  delete: (id: string) => void;
  movieSelected: (movie: Movie) => void;
  reset: () => void;
  resetQueryStatus: () => void;
};

export const Context = createContext<ContextType>({
  status: "idle",
  isLoading: false,
  movie: undefined,
  movies: [],
  save: () => {},
  delete: () => {},
  movieSelected: () => {},
  reset: () => {},
  resetQueryStatus: () => {},
});

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const queryClient = useQueryClient();
  const [movie, setMovie] = useState<Movie>();
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [queryStatus, setQueryStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const { data, status, isLoading } = useQuery({
    queryKey: ["Movie"],
    queryFn: movieApi.getMovies,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const createMutation = useMutation({
    mutationFn: movieApi.createMovie,
    onSuccess: () => {
      setQueryStatus("success");
      console.log("created");
      queryClient.invalidateQueries(["Movie"]);
    },
    onError: () => {
      setQueryStatus("error");
    },
  });

  const editMutation = useMutation({
    mutationFn: movieApi.editMovie,
    onSuccess: () => {
      setQueryStatus("success");
      queryClient.invalidateQueries(["Movie"]);
    },
    onError: () => {
      setQueryStatus("error");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: movieApi.deleteMovie,
    onSuccess: () => {
      setQueryStatus("success");
      queryClient.invalidateQueries(["Movie"]);
    },
    onError: () => {
      setQueryStatus("error");
    },
  });

  useEffect(() => {
    if (status === "success" && data !== undefined) {
      setMovies(data);
    }
  }, [status, data]);

  const saveHandler = (movie: Movie) => {
    if (!movie.id) {
      createMutation.mutate(movie);
    } else {
      editMutation.mutate(movie);
    }
    setMovie(movieDefaultValues);
  };

  const deleteHandler = (id: string) => {
    deleteMutation.mutate(id);
    setMovie(movieDefaultValues);
  };

  const movieHandler = (movie: Movie) => {
    setMovie(movie);
  };

  const resetHandler = () => {
    setMovie(movieDefaultValues);
  };

  const resetQueryStatusHandler = () => {
    setQueryStatus("idle");
  };

  return (
    <Context.Provider
      value={{
        status: queryStatus,
        isLoading,
        movie,
        movies,
        save: saveHandler,
        delete: deleteHandler,
        movieSelected: movieHandler,
        reset: resetHandler,
        resetQueryStatus: resetQueryStatusHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};


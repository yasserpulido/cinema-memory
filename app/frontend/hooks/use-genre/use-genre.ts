import { genreApi } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export const useGenre = () => {
  const { data } = useQuery({
    queryKey: ["Genre"],
    queryFn: genreApi.getGenres,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data };
};

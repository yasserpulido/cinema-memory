import { genreApi, personApi } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export const usePerson = () => {
  const { data } = useQuery({
    queryKey: ["Person"],
    queryFn: personApi.getPersons,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data };
};

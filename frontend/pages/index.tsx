import styled from "@emotion/styled";

import { ColumnProp, maxWidth, mediaQuery } from "@/design-system";
import { Movie } from "@/types";
import { movieApi } from "@/apis";
import { useRouter } from "next/router";
import { History } from "@/components/movie";
import { Layout } from "@/components/layout";

type Props = {
  movies: Array<Movie>;
};

export default function Home({ movies }: Props) {
  const router = useRouter();

  return (
    <Layout>
      {movies.length > 0 ? (
        <History movies={movies} />
      ) : (
        <NoFound>No movies found</NoFound>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  let movies: Array<Movie> = [];

  try {
    movies = await movieApi.getMovies();
  } catch (error) {
    console.log("error", error);
  }

  return {
    props: { movies },
    revalidate: 60,
  };
}

const NoFound = styled.p({
  textAlign: "center",
});

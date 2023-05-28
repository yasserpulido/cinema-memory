import { GetStaticProps } from "next";

import { movieApi } from "@/apis";
import { Movie } from "@/types";
import { Information } from "@/components/movie";
import styled from "@emotion/styled";
import { maxWidth, mediaQuery } from "@/design-system";
import { Layout } from "@/components/layout";

type Props = {
  movie: Movie;
};

export default function MoviePage({ movie }: Props) {
  return (
    <Layout>
      <Information movie={movie} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const movies = await movieApi.getMovies();
  const paths = movies.map((movie: Movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const movie = await movieApi.getMovie(id);

  return {
    props: { movie },
  };
};

const Container = styled.div({
  [mediaQuery.large]: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
});

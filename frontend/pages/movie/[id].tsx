import { GetStaticProps } from "next";

import { movieApi } from "@/apis";
import { Movie } from "@/types";
import { Information } from "@/components/movie";
import styled from "@emotion/styled";
import { maxWidth, mediaQuery } from "@/design-system";

type Props = {
  movie: Movie;
};

export default function MoviePage({ movie }: Props) {
  return (
    <Container>
      <Information movie={movie} />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
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

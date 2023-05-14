import { GetStaticProps } from "next";

import { movieApi } from "@/apis";
import { Movie } from "@/types";

type Props = {
  movie: Movie;
};

export default function MoviePage({ movie }: Props) {
  return (
    <div>
      {movie.title} ({movie.year})
    </div>
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

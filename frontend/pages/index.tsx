import styled from "@emotion/styled";

import {
  ColumnProp,
  Table,
  Workshop,
  maxWidth,
  mediaQuery,
} from "@/design-system";
import { Movie } from "@/types";
import { movieApi } from "@/apis";
import { useRouter } from "next/router";

type Props = {
  movies: Array<Movie>;
};

export default function Home({ movies }: Props) {
  const router = useRouter();

  const columns: Array<ColumnProp<Movie>> = [
    { heading: "Title", value: "title" },
    { heading: "Year", value: "year" },
  ];

  const handleSelect = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <Container>
      <Workshop>
        <Table
          columns={columns}
          data={movies}
          onSelect={handleSelect}
          isLoading={false}
        />
      </Workshop>
    </Container>
  );
}

export async function getStaticProps(context) {
  const movies = await movieApi.getMovies();

  return {
    props: { movies },
  };
}

const Container = styled.div({
  [mediaQuery.large]: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
});

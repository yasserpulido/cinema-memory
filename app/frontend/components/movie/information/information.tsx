import { Card } from "@/design-system";
import { Movie } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  movie: Movie;
};

export const Information = ({ movie }: Props) => {
  const directors = movie.directorsNames.map((director) => director).join(", ");
  const genres = movie.genresNames.map((genre) => genre).join(", ");

  return (
    <Card title={movie.title}>
      <Figure>
        <Image
          src={"https://cinema-memory.fly.dev" + movie.imageUrl}
          alt={movie.title}
          width={600}
          height={335}
          sizes="100vw"
        />
      </Figure>
      <Article>
        <Description>{movie.description}</Description>
        <ul>
          <li>
            <Bold>Director</Bold>: {directors}
          </li>
          <li>
            <Bold>Year</Bold>: {movie.year}
          </li>
          <li>
            <Bold>Genre</Bold>: {genres}
          </li>
          <li>
            <Bold>Runtime</Bold>: {movie.runtime} minutes
          </li>
          <li>
            <Bold>Rating</Bold>: {movie.rating}% (Rotten Tomatoes)
          </li>
        </ul>
      </Article>
    </Card>
  );
};

const Figure = styled.figure({
  textAlign: "center",
});

const Article = styled.article({
  lineHeight: 1.5,
});

const Description = styled.p({
  marginBottom: "1rem",

  "::first-letter": {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
});

const Bold = styled.span({
  fontWeight: "bold",
});

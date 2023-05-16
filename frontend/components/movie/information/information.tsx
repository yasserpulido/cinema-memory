import { Card } from "@/design-system";
import { Movie } from "@/types";
import styled from "@emotion/styled";

type Props = {
  movie: Movie;
};

export const Information = ({ movie }: Props) => {
  return (
    <Card title={movie.title}>
      <Article>
        <Description>{movie.description}</Description>
        <p>
          <Bold>Year</Bold>: {movie.year}
        </p>
        <p>
          <Bold>Rating</Bold>: {movie.rating}%
        </p>
      </Article>
    </Card>
  );
};

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

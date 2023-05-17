import { Panel } from "@/design-system";
import { Movie } from "@/types";
import styled from "@emotion/styled";

type Props = {
  movies: Array<Movie>;
};

export const History = ({ movies }: Props) => {
  return (
    <PanelContainer>
      {movies.map((movie) => (
        <Panel key={movie.id} title={`${movie.title} (${movie.year})`}>
          <p>{movie.description}</p>
        </Panel>
      ))}
    </PanelContainer>
  );
};

const PanelContainer = styled.div({
  display: "grid",
  gap: "1rem",
});

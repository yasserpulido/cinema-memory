import { Button, Card, Panel, TimelineBase } from "@/design-system";
import { Timeline } from "@/design-system/timeline";
import { Movie } from "@/types";
import styled from "@emotion/styled";

type Props = {
  movies: Array<Movie>;
};

export const History = ({ movies }: Props) => {
  return (
    <PanelContainer>
      <TimelineBase.Timeline>
        {movies.map((movie) => (
          <TimelineBase.Item
            key={movie.id}
            title={movie.title}
            description={movie.description}
            date={movie.year.toString()}
          />
        ))}
      </TimelineBase.Timeline>
    </PanelContainer>
  );
};

const PanelContainer = styled.div({
  display: "grid",
  gap: "1rem",
});

const FooterContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});

const Anchor = styled.a({});

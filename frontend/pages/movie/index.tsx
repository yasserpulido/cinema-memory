import styled from "@emotion/styled";
import { Workshop, maxWidth, mediaQuery } from "anwar-components";

import { Detail, List } from "@/components/movie";

export default function Movie() {
  return (
    <Container>
      <Workshop>
        <Detail />
        <List />
      </Workshop>
    </Container>
  );
}

const Container = styled.div({
  [mediaQuery.large]: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
});

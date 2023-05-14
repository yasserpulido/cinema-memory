import styled from "@emotion/styled";

import { Detail, List } from "@/components/movie";
import { Workshop, maxWidth, mediaQuery } from "@/design-system";

export default function Movie() {
  return (
    <Container>
      <Workshop>
        <Detail />
        <List editMode={true} />
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

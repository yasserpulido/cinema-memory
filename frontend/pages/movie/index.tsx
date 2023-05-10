import { Detail } from "@/components";
import styled from "@emotion/styled";
import { Workshop, maxWidth, mediaQuery } from "anwar-components";

export default function Movie() {
  return (
    <Container>
      <Workshop>
        <Detail />
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
import styled from "@emotion/styled";

import { colors } from "../theme/colors";
import { Anchor } from "../anchor";

type Props = {
  title: string;
  date: string;
  description: string;
  readMoreLink?: string;
};

export const Item = ({ description, title, date, readMoreLink }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Header>
      <Description>{description}</Description>
      {readMoreLink !== "" && (
        <Footer>
          <Anchor href={readMoreLink} text="Read more" />
        </Footer>
      )}
    </Container>
  );
};

const Container = styled.div({
  border: `1px solid ${colors.DoveGrey}`,
  padding: "1rem",
  display: "grid",
  gap: "1rem",
});

const Header = styled.div({});

const Title = styled.div({
  marginBottom: "0.5rem",
});

const Date = styled.div({
  fontWeight: "bold",
  fontSize: "0.8rem",
});

const Description = styled.div({
  textAlign: "end",
});

const Footer = styled.div({
  textAlign: "end",
});

import { Footerbar, Navbar, maxWidth, mediaQuery } from "@/design-system";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Navbar
        title={{ name: "Cinema Memory", color: "BlueDress", link: "/" }}
        items={[{ name: "CRUD", link: "/movie" }]}
      />
      <main>{children}</main>
      <Footerbar text="Developed by Yasser Barzotto" />
    </Container>
  );
};

const Container = styled.div({
  [mediaQuery.large]: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

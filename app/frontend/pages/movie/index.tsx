import styled from "@emotion/styled";

import { Detail, List } from "@/components/movie";
import { Workshop } from "@/design-system";
import { Layout } from "@/components/layout";

export default function Movie() {
  return (
    <Layout>
      <Workshop>
        <Detail />
        <List />
      </Workshop>
    </Layout>
  );
}

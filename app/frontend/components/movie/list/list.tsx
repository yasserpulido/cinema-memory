import { useContext } from "react";

import { MovieProvider } from "@/providers";
import { Movie } from "@/types";
import { ColumnProp, Table } from "@/design-system";

export const List = () => {
  const context = useContext<MovieProvider.ContextType>(MovieProvider.Context);

  const columns: Array<ColumnProp<Movie>> = [
    { heading: "Title", value: "title" },
    { heading: "Year", value: "year" },
  ];

  return (
    <Table
      columns={columns}
      data={context.movies}
      onSelect={context.movieSelected}
      isLoading={context.isLoading}
    />
  );
};

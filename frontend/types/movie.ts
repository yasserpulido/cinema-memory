export type Movie = {
  id: number;
  title: string;
  description: string;
  year: number;
  rating: number;
  runtime: number;
  genres: number[];
  genresNames: string[];
  directors: number[];
  directorsNames: string[];
  image: File;
  imageUrl: string;
};

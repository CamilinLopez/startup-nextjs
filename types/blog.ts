// type Author = {
//   name: string;
//   image: string;
//   designation: string;
// };

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  // author: Author;
  // tags: string[];
  // publishDate: string;
};

export type PaginationItem = "Prev" | "Next" | "..." | "1" | "2" | "3";


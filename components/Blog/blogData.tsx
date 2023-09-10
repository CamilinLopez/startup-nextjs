import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "API usage analytics platform for Hasura",
    paragraph:
      "Optimize your Hasura API by leveraging usage analytics to make data driven decisions.",
    image: "/images/blog/newImages/project1.svg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Productivity software for meeting notes & tasks.",
    paragraph:
      "Dedicated meeting hubs to help you get the most out of each and every meeting.",
    image: "/images/blog/newImages/project2.svg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "An all-in-one platform for copywriters",
    paragraph:
      "A two-part project to help copywriters practice, publish, and find work.",
    image: "/images/blog/newImages/project3.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

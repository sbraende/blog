import { v4 as uuidv4 } from "uuid";

const blogPostList = [
  {
    id: uuidv4(),
    title: "Norway fun fact Quiz",
    description: "Interactive quiz about Norwegian culture, built with responsive HTML, CSS, and JS.",
    path: "./src/html/blogposts/norway-quiz.html",
    thumbnail: "/assets/images/blogposts/norway-quiz/norway-quiz-thumbnail.webp",
    publishdate: "10. des. 2024",
    readlength: 6,
  },
  {
    id: uuidv4(),
    title: "Components Viewer",
    description: "Showcase of 8 UI components and states, built with responsive HTML, CSS, and JS.",
    thumbnail: "/assets/images/blogposts/components-viewer/components-viewer-thumbnail.webp",
    path: "",
    publishdate: "03. des. 2024",
    readlength: 3,
  },
];

export default blogPostList;

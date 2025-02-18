import { v4 as uuidv4 } from "uuid";

const blogList = [
  {
    id: uuidv4(),
    title: "Norway fun fact Quiz",
    lead: "Interactive quiz about Norwegian culture, built with responsive HTML, CSS, and JS.",
    thumbnail: "path/toImage",
    path: "",
    readlength: 6,
  },
  {
    id: uuidv4(),
    title: "Components Viewer",
    lead: "Showcase of 8 UI components and states, built with responsive HTML, CSS, and JS.",
    thumbnail: "path/toImage",
    path: "",
    readlength: 3,
  },
];

export default blogList;

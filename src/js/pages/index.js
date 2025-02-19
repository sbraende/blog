import blogList from "../../data/blogList.js";

// SELECTORS
const shareButton = document.querySelector(".blogpostDetails__share-button");

// RENDER BLOG LIST
blogList.forEach((blogPost) => {
  console.log(blogPost.title);
});

// EVENTS
shareButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
